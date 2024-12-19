"use client";

import { useRef, useEffect } from "react";

const useTextareaHeight = (input: string) => {
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

  useEffect(() => {
    if (textAreaRef.current) {
      adjustHeight();
    }
  }, [input]);

  return textAreaRef;
};

export default useTextareaHeight;
