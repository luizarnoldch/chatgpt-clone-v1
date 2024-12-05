"use client";

import React, { useRef, useEffect, useActionState } from "react";
import { Textarea } from "../ui/textarea";
import CreateCompletion from "@/actions/completion/CreateCompletion";

const InputMessage = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "64px";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        256
      )}px`;
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      handleInput();
    }
  }, []);

  const [message, formAction, state] = useActionState(CreateCompletion, null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      const form = event.currentTarget.form;
      if (form) {
        form.requestSubmit();
      }
    }
  };

  return (
    <>
      <Textarea
        ref={textareaRef}
        className="w-full h-auto resize-none overflow-y p-2"
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        rows={1}
        name="message"
      />
      {state ? <p>Sending</p> : null}
      {message ? <p>{message}</p> : null}
    </>

  );
};

export default InputMessage;
