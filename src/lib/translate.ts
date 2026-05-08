import type { Content, Locale } from "@/lib/content";

const LS_PREFIX = "musa_translate_cache_v2";

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

function getManualTranslation(text: string, target: Locale): string | null {
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

function writeCache(target: Locale, text: string, translated: string) {
  if (typeof window === "undefined") return;

  const manual = getManualTranslation(text, target);
  if (manual) return;

  try {
    window.localStorage.setItem(getCacheKey(target, text), translated);
  } catch {
    // ignore quota / blocked storage
  }
}

async function translateViaApi(texts: string[], target: Locale): Promise<string[]> {
  const res = await fetch("/api/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ texts, targetLang: target }),
  });

  if (!res.ok) throw new Error(`Translation failed: ${res.status}`);

  const data = (await res.json()) as { translations: string[] };
  return data.translations;
}

export async function translateText(text: string, target: Locale): Promise<string> {
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

function collectStrings(node: unknown, out: Set<string>, parentKey?: string) {
  if (typeof node === "string") {
    if (!parentKey || !shouldSkipKey(parentKey)) {
      if (node.trim()) out.add(node);
    }
    return;
  }

  if (Array.isArray(node)) {
    for (const item of node) collectStrings(item, out, parentKey);
    return;
  }

  if (node && typeof node === "object") {
    for (const [k, v] of Object.entries(node as Record<string, unknown>)) {
      if (shouldSkipKey(k)) continue;
      collectStrings(v, out, k);
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
    return node.map((x) => replaceStrings(x, map, target, parentKey));
  }

  if (node && typeof node === "object") {
    const obj = node as Record<string, unknown>;
    const next: Record<string, unknown> = {};

    for (const [k, v] of Object.entries(obj)) {
      if (shouldSkipKey(k)) {
        next[k] = v;
      } else {
        next[k] = replaceStrings(v, map, target, k);
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

  for (const s of unique) {
    const manual = getManualTranslation(s, target);

    if (manual) {
      map.set(s, manual);
      continue;
    }

    const cached = readCache(target, s);

    if (cached) {
      map.set(s, cached);
    } else {
      missing.push(s);
    }
  }

  if (missing.length) {
    const translations = await translateViaApi(missing, target);

    missing.forEach((src, i) => {
      const manual = getManualTranslation(src, target);
      const translated = manual ?? translations[i] ?? src;

      map.set(src, translated);
      writeCache(target, src, translated);
    });
  }

  return replaceStrings(content, map, target) as Content;
}