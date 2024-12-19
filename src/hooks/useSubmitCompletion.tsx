"use client";

import { useRouter } from "next/navigation";
import { useChatCompletionContext } from "@/context/ChatCompletionContext";
import useChatId from "./useChatId";

const DOMAIN = "http://localhost:3000";

const useSubmitCompletion = () => {
  const router = useRouter();
  const chatIdParam = useChatId();
  const { input, handleSubmit, handleInputChange, isLoading, stop } = useChatCompletionContext();

  const submitCompletion = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLoading || input.trim() === "") return;

    try {
      if (!chatIdParam) {
        const fetchNewConversation = await fetch(
          `${DOMAIN}/api/v1/conversation/users/1`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: input }),
          },
        );

        const { response: newConversation } = await fetchNewConversation.json();
        router.push(`/chat/${newConversation}`);
      }
      handleSubmit(e);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return { submitCompletion, isLoading, input, handleInputChange, stop };
};

export default useSubmitCompletion;
