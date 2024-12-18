import ChatCompletion from "@/components/ChatCompletion";
import React from "react";

type Params = Promise<{ chatId: string }>;

type ChatIdPageProps = {
  params: Params;
};

const ChatIdPage = async ({ params }: ChatIdPageProps) => {
  const { chatId } = await params;
  return <ChatCompletion chatId={chatId} />;
};

export default ChatIdPage;
