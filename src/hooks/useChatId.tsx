"use client";

import { useState, useEffect } from "react";
import { useParams, usePathname } from "next/navigation";

type ChatCompletionBoxProps = {
  chatId?: string;
};

const useChatId = () => {
  const params = useParams<ChatCompletionBoxProps>();
  const pathname = usePathname();
  const [chatIdParam, setChatIdParam] = useState(params.chatId);

  useEffect(() => {
    setChatIdParam(params.chatId);
  }, [pathname]);

  return chatIdParam;
};

export default useChatId;
