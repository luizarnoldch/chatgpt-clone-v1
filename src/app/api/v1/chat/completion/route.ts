import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: "Promp is required" }, { status: 400 });
    }

    const { text } = await generateText({
      model: openai("gpt-4o-mini"),
      system:
        "Vas a recibir textos en general y debes crear un nombre que resuma todo lo que fue escrito en 4 palabras omite los puntos finales, comas y demás simbolos",
      prompt: prompt,
    });

    return NextResponse.json({ response: text }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: `Internal Server Error: ${(error as Error).message}`,
      },
      { status: 500 },
    );
  }
}
