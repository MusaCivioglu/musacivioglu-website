import type { Content, Locale } from "@/lib/content";

const LS_PREFIX = "musa_translate_cache_v3";

const DO_NOT_TRANSLATE_KEYS = new Set([
  "image",
  "link",
  "date",
  "value",
  "href",
  "url",
  "src",
  "alt",
]);

const MANUAL_TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    "Hakkımda": "About Me",
    "Deneyim": "Experience",
    "Eğitim": "Education",
    "Diller": "Languages",
    "Yetenekler": "Skills",
    "İletişim": "Contact",
    "CV İndir": "Download CV",
    "İletişime Geç": "Contact Me",
  },
  it: {
    "Hakkımda": "Chi Sono",
    "Deneyim": "Esperienza",
    "Eğitim": "Formazione",
    "Diller": "Lingue",
    "Yetenekler": "Competenze",
    "İletişim": "Contatto",
    "CV İndir": "Scarica CV",
    "İletişime Geç": "Contattami",
  },
  es: {
    "Hakkımda": "Sobre Mí",
    "Deneyim": "Experiencia",
    "Eğitim": "Educación",
    "Diller": "Idiomas",
    "Yetenekler": "Habilidades",
    "İletişim": "Contacto",
    "CV İndir": "Descargar CV",
    "İletişime Geç": "Contáctame",
  },
};

function getManualTranslation(
  text: string,
  target: Locale
): string | null {
  if (target === "tr") return text;
  return MANUAL_TRANSLATIONS[target]?.[text] ?? null;
}

function getCacheKey(target: Locale, text: string) {
  return `${LS_PREFIX}:${target}:${text}`;
}

function readCache(target: Locale, text: string): string | null {
  if (typeof window === "undefined") return null;

  const manual = getManualTranslation(text, target);
  if (manual) return manual;

  try {
    return window.localStorage.getItem(getCacheKey(target, text));
  } catch {
    return null;
  }
}

function writeCache(
  target: Locale,
  text: string,
  translated: string
) {
  if (typeof window === "undefined") return;

  const manual = getManualTranslation(text, target);
  if (manual) return;

  try {
    window.localStorage.setItem(
      getCacheKey(target, text),
      translated
    );
  } catch {
    // ignore quota / blocked storage
  }
}

async function translateViaApi(
  texts: string[],
  target: Locale
): Promise<string[]> {
  try {
    const res = await fetch("/api/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        texts,
        targetLang: target,
      }),
    });

    if (!res.ok) {
      console.warn("Translation API failed:", res.status);
      return texts;
    }

    const data = (await res.json()) as {
      translations?: string[];
    };

    if (!Array.isArray(data.translations)) {
      return texts;
    }

    return data.translations.map((translation, index) =>
      translation?.trim() ? translation : texts[index]
    );
  } catch (error) {
    console.warn("Translation API error:", error);
    return texts;
  }
}

export async function translateText(
  text: string,
  target: Locale
): Promise<string> {
  if (target === "tr") return text;

  const manual = getManualTranslation(text, target);
  if (manual) return manual;

  const cached = readCache(target, text);
  if (cached) return cached;

  const [translated] = await translateViaApi([text], target);
  writeCache(target, text, translated);

  return translated;
}

function shouldSkipKey(key: string) {
  return DO_NOT_TRANSLATE_KEYS.has(key);
}

function collectStrings(
  node: unknown,
  out: Set<string>,
  parentKey?: string
) {
  if (typeof node === "string") {
    if (!parentKey || !shouldSkipKey(parentKey)) {
      if (node.trim()) out.add(node);
    }
    return;
  }

  if (Array.isArray(node)) {
    for (const item of node) {
      collectStrings(item, out, parentKey);
    }
    return;
  }

  if (node && typeof node === "object") {
    for (const [key, value] of Object.entries(
      node as Record<string, unknown>
    )) {
      if (shouldSkipKey(key)) continue;
      collectStrings(value, out, key);
    }
  }
}

function replaceStrings(
  node: unknown,
  map: Map<string, string>,
  target: Locale,
  parentKey?: string
): unknown {
  if (typeof node === "string") {
    if (parentKey && shouldSkipKey(parentKey)) return node;

    const manual = getManualTranslation(node, target);
    if (manual) return manual;

    return map.get(node) ?? node;
  }

  if (Array.isArray(node)) {
    return node.map((item) =>
      replaceStrings(item, map, target, parentKey)
    );
  }

  if (node && typeof node === "object") {
    const obj = node as Record<string, unknown>;
    const next: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(obj)) {
      if (shouldSkipKey(key)) {
        next[key] = value;
      } else {
        next[key] = replaceStrings(value, map, target, key);
      }
    }

    return next;
  }

  return node;
}

export async function translateContent(
  content: Content,
  target: Locale
): Promise<Content> {
  if (target === "tr") return content;

  const strings = new Set<string>();
  collectStrings(content, strings);

  const unique = Array.from(strings);

  const missing: string[] = [];
  const map = new Map<string, string>();

  for (const sourceText of unique) {
    const manual = getManualTranslation(sourceText, target);

    if (manual) {
      map.set(sourceText, manual);
      continue;
    }

    const cached = readCache(target, sourceText);

    if (cached) {
      map.set(sourceText, cached);
    } else {
      missing.push(sourceText);
    }
  }

  if (missing.length) {
    const translations = await translateViaApi(missing, target);

    missing.forEach((sourceText, index) => {
      const manual = getManualTranslation(sourceText, target);
      const translated =
        manual ?? translations[index] ?? sourceText;

      map.set(sourceText, translated);
      writeCache(target, sourceText, translated);
    });
  }

  return replaceStrings(content, map, target) as Content;
}