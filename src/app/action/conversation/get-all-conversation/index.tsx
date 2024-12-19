"use server";

import prisma from "@/lib/prisma";
import { Conversation } from "@prisma/client";

export async function GetAllConversation() {
  const conversations: Conversation[] = await prisma.conversation.findMany({
    where: {
      userId: 1,
    },
  });

  return conversations;
}
