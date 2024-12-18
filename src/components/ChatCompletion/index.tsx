import React from "react";
import ChatCompletionHistorial from "./ChatCompletionHistorial";
import ChatCompletionBox from "./ChatCompletionBox";

type ChatCompletionProps = {
  chatId?: string;
};

const ChatCompletion = ({ chatId }: ChatCompletionProps) => {
  return (
    <div className="flex h-full w-full flex-col gap-4 p-4">
      <ChatCompletionHistorial chatId={chatId} />
      <ChatCompletionBox chatId={chatId} />
    </div>
  );
};

export default ChatCompletion;
