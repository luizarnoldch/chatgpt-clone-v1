// Context Providers
import { ChatCompletionProvider } from "@/context/ChatCompletionContext";

// Components
import Sidebar from "@/components/Sidebar";
import Topvar from "@/components/Topvar";

// Custom Components
import ChatCompletionBox from "@/components/ChatCompletion/ChatCompletionBox";

import React from "react";

type LayoutChatsProps = {
  children?: React.ReactNode;
};

const LayoutChats = ({ children }: LayoutChatsProps) => {
  return (
    <ChatCompletionProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Topvar />
          <div className="flex-1">
            <div className="flex h-full w-full flex-col gap-4 p-4">
              <div className="flex-1">{children}</div>
              <ChatCompletionBox />
            </div>
          </div>
        </div>
      </div>
    </ChatCompletionProvider>
  );
};

export default LayoutChats;
