"use client";

import React, { createContext, useContext, useMemo } from "react";
import { useChat } from "ai/react";

type ChatCompletionContextValue = ReturnType<typeof useChat>;

const ChatCompletionContext = createContext<
  ChatCompletionContextValue | undefined
>(undefined);

export const ChatCompletionProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const chat = useChat({ api: "/api/v1/chat/completion/stream" });

  const value = useMemo(() => chat, [chat]);

  return (
    <ChatCompletionContext.Provider value={value}>
      {children}
    </ChatCompletionContext.Provider>
  );
};

// Hook para consumir el contexto
export const useChatCompletionContext = () => {
  const context = useContext(ChatCompletionContext);
  if (!context) {
    throw new Error("useChatContext debe usarse dentro de un ChatProvider");
  }
  return context;
};
