"use client";

import { CreateConversation } from "@/app/action/conversation/create-conversation";
import { useActionState, useEffect } from "react";

type UseCreateConversationProps = {
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

const useCreateConversation = ({ setInput }: UseCreateConversationProps) => {
  const [state, createConversationAction, isPending] = useActionState(
    CreateConversation,
    null,
  );

  useEffect(() => {
    setInput("");
  }, [isPending]);

  return { state, createConversationAction, isPending };
};

export default useCreateConversation;
