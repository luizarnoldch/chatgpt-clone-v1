"use client";

// Components
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SendIcon, StopCircleIcon } from "lucide-react";

// Custom Hooks
import useTextareaHeight from "@/hooks/useTextareaHeight";

// Helpers
import { handleEnterKeyDown } from "@/helpers/handleEnterDown";
import useSubmitCompletion from "@/hooks/useSubmitCompletion";

const ChatCompletionBox = () => {
  const { submitCompletion, isLoading, input, handleInputChange, stop } = useSubmitCompletion();
  const textAreaRef = useTextareaHeight(input);

  return (
    <form
      className="mx-auto flex w-full max-w-7xl items-center justify-center gap-2 rounded-lg bg-background p-4"
      onSubmit={submitCompletion}
    >
      <Textarea
        ref={textAreaRef}
        className="overflow-y h-auto w-full resize-none rounded-md p-4"
        onKeyDown={handleEnterKeyDown}
        value={input}
        onChange={handleInputChange}
        rows={1}
        id="prompt"
        name="prompt"
        placeholder="Type a message..."
      />
      {
        isLoading ? <Button onClick={stop}>
          <StopCircleIcon />
        </Button> : <Button disabled={input.length < 1}>
          <SendIcon />
        </Button>
      }


    </form>
  );
};

export default ChatCompletionBox;
