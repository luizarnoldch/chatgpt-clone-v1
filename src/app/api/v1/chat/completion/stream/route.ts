import openai from "@/lib/openai";
import prisma from "@/lib/prisma";
import { CoreTool, StepResult, streamText } from "ai";
import { NextResponse } from "next/server";

type Message = {
  role: string;
  content: string;
};

type CompletionBody = {
  model: string;
  temperature: number;
  maxTokens?: number;
  messages: Message[];
  stream: boolean;
  stream_options: {
    include_usage: boolean;
  };
};

type EventRequest = Omit<
  StepResult<Record<string, CoreTool<any, any>>>,
  "stepType" | "isContinued"
> & {
  readonly steps: StepResult<Record<string, CoreTool<any, any>>>[];
};

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages) {
      return NextResponse.json(
        { error: "Messages are required" },
        { status: 400 },
      );
    }

    const result = streamText({
      model: openai("gpt-4o-mini"),
      // system: "You are a helpful assistant.",
      messages,
      // onChunk(event) {
      //   console.log(JSON.stringify(event));
      // },
      // maxTokens: 2048,
      temperature: 1,
      topP: 1,
      frequencyPenalty: 0,
      presencePenalty: 0,
      // onFinish: async (event: EventRequest) => {
      //   try {
      //     let dataRequest: EventRequest = event;
      //     if (!dataRequest?.request?.body) {
      //       console.error("Request body is undefined or null.");
      //       throw new Error("Invalid dataRequest or missing request body.");
      //     }
      //     const parsedBody: CompletionBody = JSON.parse(
      //       dataRequest.request.body
      //     );
      //     const parsedResponse = dataRequest.response;
      //     const messages: Message[] = parsedBody.messages;

      //     const temperature: number = parsedBody.temperature;
      //     const model: string = parsedBody.model;
      //     const maxTokens: number | undefined =
      //       parsedBody.maxTokens ?? undefined;
      //     const inputText: string = messages[0].content;
      //     const role: string = messages[0].role;

      //     const newQuestion = await prisma.question.create({
      //       data: {
      //         role: role,
      //         text: inputText,
      //         temperature: temperature,
      //         maxTokens: maxTokens,
      //       },
      //     });

      //     const newCompletion = await prisma.completion.create({
      //       data: {
      //         text: dataRequest.text,
      //         modelName: model,
      //         modelId: parsedResponse.modelId,
      //         response: JSON.stringify(dataRequest),
      //       },
      //     });

      //     await prisma.conversationQuestionCompletion.create({
      //       data: {
      //         conversationId: 4,
      //         completionId: newCompletion.id,
      //         questionId: newQuestion.id,
      //       },
      //     });
      //   } catch (error) {
      //     console.log("Error al parsear el body:", error);
      //   }
      // },
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
