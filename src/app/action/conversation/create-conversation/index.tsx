"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

const DOMAIN = "http://localhost:3000";

export async function CreateConversation(
  previousState: any,
  formData: FormData,
) {
  const { chatId, prompt } = Object.fromEntries(formData.entries());

  if (chatId === "") {
    const fetchNewName = await fetch(`${DOMAIN}/api/v1/chat/completion`, {
      method: "POST",
      body: JSON.stringify({ prompt: prompt.toString() }),
    });
    const { response: newName } = await fetchNewName.json();

    const newConversation = await prisma.conversation.create({
      data: {
        name: newName,
        userId: 1,
      },
    });
    redirect(`/chat/${newConversation.uuid}`);
  }
}
