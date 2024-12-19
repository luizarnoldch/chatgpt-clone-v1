"use client";

import { useChatCompletionContext } from "@/context/ChatCompletionContext";
import React, { useEffect, useRef } from "react";

type ChatCompletionHistorialProps = {
  chatId?: string;
};

const ChatCompletionHistorial = ({ chatId }: ChatCompletionHistorialProps) => {
  const { messages } = useChatCompletionContext();

  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div>
      <p>{chatId}</p>
      {messages.map((message) => (
        <div key={message.id}>
          {message.role === "user" ? "User: " : "AI: "}
          {message.content}
        </div>
      ))}
    </div>
  );
};

export default ChatCompletionHistorial;
