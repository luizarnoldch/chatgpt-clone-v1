import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  path: string;
};

const DesktopSidebarChat = ({ name, path }: Props) => {
  return (
    <div className="h-full w-full p-2">
      <Button asChild className="h-full w-full">
        <Link href={path} className="h-full w-full">
          {name}
        </Link>
      </Button>
    </div>
  );
};

export default DesktopSidebarChat;
