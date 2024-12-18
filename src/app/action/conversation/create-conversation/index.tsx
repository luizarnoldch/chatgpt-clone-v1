"use server";

import { redirect } from "next/navigation";

export async function CreateConversation(previousState: any, formData: FormData) {

  const { chatId, prompt } = Object.fromEntries(formData.entries());

  const newChatId = 123

  redirect(`/chat/${123}`)
}
