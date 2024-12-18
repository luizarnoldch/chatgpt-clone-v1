"use client";

import { CreateConversation } from "@/app/action/conversation/create-conversation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SendIcon } from "lucide-react";
import React, { useRef, useEffect, useState, useActionState } from "react";

type ChatCompletionBoxProps = {
  chatId?: string;
};

const ChatCompletionBox = ({ chatId }: ChatCompletionBoxProps) => {
  const [input, setInput] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "64px";
      textAreaRef.current.style.height = `${Math.min(
        textAreaRef.current.scrollHeight,
        256,
      )}px`;
    }
  };

  const [state, formAction, isPending] = useActionState(
    CreateConversation,
    null,
  );

  useEffect(() => {
    if (textAreaRef.current) {
      adjustHeight();
    }
  }, [input]);

  useEffect(() => {
    setInput('');
  }, [isPending]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      const form = event.currentTarget.form;
      if (form) {
        form.requestSubmit();
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  return (
    <form
      className="mx-auto flex w-full max-w-7xl items-center justify-center gap-2 rounded-lg bg-background p-4"
      action={formAction}
    >
      <Textarea
        ref={textAreaRef}
        className="overflow-y h-auto w-full resize-none rounded-md p-4"
        onKeyDown={handleKeyDown}
        value={input}
        onChange={handleChange}
        rows={1}
        id="prompt"
        name="prompt"
        placeholder="Type a message..."
      />
      <Input className="hidden" defaultValue={chatId ?? ""} name="chatId" id="chatId" />
      <Button disabled={input.length < 1}>
        <SendIcon />
      </Button>
    </form>
  );
};

export default ChatCompletionBox;
