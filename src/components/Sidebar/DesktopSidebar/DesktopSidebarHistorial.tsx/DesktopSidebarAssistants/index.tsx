import { Button } from "@/components/ui/button";
import { LayoutGridIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const DesktopSidebarAssistants = (props: Props) => {
  return (
    <div className="flex items-center justify-center gap-4 p-2">
      <Button className="h-full w-full" asChild>
        <Link href="/assistants" className="h-full w-full">
          <LayoutGridIcon />
          <p>Explore Assistants</p>
        </Link>
      </Button>
    </div>
  );
};

export default DesktopSidebarAssistants;
