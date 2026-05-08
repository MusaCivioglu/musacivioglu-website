import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Body = {
  texts?: string[];
  text?: string;
  targetLang: "en" | "it" | "es";
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;

    const texts = body.texts ?? (body.text ? [body.text] : []);

    return NextResponse.json({
      translations: texts,
    });
  } catch {
    return NextResponse.json({
      translations: [],
    });
  }
}