
import React from "react";
import { Button } from "../ui/button";
import InputMessage from "./InputMessage";
import { CreateConversation } from "@/actions/conversation/CreateConversation";

const ChatInput = () => {
  return (
    <div className="min-h-16 max-h-64 w-full">
      <form
        // onSubmit={handleSubmit}
        action={CreateConversation}
        className="flex justify-center items-center h-full w-3/4 mx-auto gap-4"
      >
        <Button size="lg" className="rounded-full">
          Play
        </Button>
        <InputMessage />
      </form>
    </div>
  );
};

export default ChatInput;
