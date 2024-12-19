import ChatCompletionHistorial from "@/components/ChatCompletion/ChatCompletionHistorial";
import React from "react";

type Params = Promise<{ chatId: string }>;

type ChatIdPageProps = {
  params: Params;
};

const ChatIdPage = async ({ params }: ChatIdPageProps) => {
  const { chatId } = await params;
  return <ChatCompletionHistorial chatId={chatId} />;
};

export default ChatIdPage;
