import prisma from "@/lib/prisma";
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ userId: string }> },
) {
  try {
    const userId = (await params).userId;
    const parsedUserId = Number(userId);

    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: "Promp is required" }, { status: 400 });
    }

    const { text: newName } = await generateText({
      model: openai("gpt-4o-mini"),
      system:
        "Vas a recibir textos en general y debes crear un nombre que resuma todo lo que fue escrito en 4 palabras omite los puntos finales, comas y demás simbolos",
      prompt: prompt,
    });

    const newConversation = await prisma.conversation.create({
      data: {
        name: newName,
        userId: parsedUserId,
      },
    });

    return NextResponse.json(
      { response: newConversation.uuid },
      { status: 200 },
    );
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
