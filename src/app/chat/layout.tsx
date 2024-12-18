import Sidebar from "@/components/Sidebar";
import Topvar from "@/components/Topvar";
import React from "react";

type LayoutChatsProps = {
  children?: React.ReactNode;
};

const LayoutChats = ({ children }: LayoutChatsProps) => {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Topvar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default LayoutChats;
