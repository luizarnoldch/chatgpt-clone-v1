import { Button } from "@/components/ui/button";
import { Search, Sidebar, SquarePenIcon } from "lucide-react";
import React from "react";

type Props = {};

const DesktopSidebarTools = (props: Props) => {
  return (
    <div className="flex h-16 items-center justify-between px-4">
      <Button size="icon">
        <Sidebar />
      </Button>
      <div className="flex items-center justify-center gap-4">
        <Button size="icon">
          <Search />
        </Button>
        <Button size="icon">
          <SquarePenIcon />
        </Button>
      </div>
    </div>
  );
};

export default DesktopSidebarTools;
