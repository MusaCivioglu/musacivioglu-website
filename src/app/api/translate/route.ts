import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Body = {
  texts?: string[];
  text?: string;
  targetLang: "en" | "it" | "es";
};

const TARGET_LANGS: Record<string, string> = {
  en: "en",
  it: "it",
  es: "es",
};

async function translateOne(text: string, target: string) {
  const googleTarget = TARGET_LANGS[target] ?? target;

  const url =
    "https://translate.googleapis.com/translate_a/single" +
    `?client=gtx&sl=tr&tl=${googleTarget}&dt=t&q=${encodeURIComponent(text)}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Google Translate failed: ${res.status}`);
  }

  const data = await res.json();

  return data[0]
    .map((item: any[]) => item[0])
    .join("");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;

    const target = body.targetLang;
    const texts = body.texts ?? (body.text ? [body.text] : []);

    if (!target || !texts.length) {
      return NextResponse.json(
        { error: "Missing texts or targetLang" },
        { status: 400 }
      );
    }

    const translations: string[] = [];

    for (const text of texts) {
      try {
        const translated = await translateOne(text, target);
        translations.push(translated || text);
      } catch (error) {
        console.error("Translation failed:", error);
        translations.push(text);
      }
    }

    return NextResponse.json({ translations });
  } catch (error) {
    console.error("TRANSLATION ERROR:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Translation failed",
      },
      { status: 500 }
    );
  }
}