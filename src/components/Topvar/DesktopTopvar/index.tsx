import React from "react";
import DesktopTopvarModelDropdown from "./DesktopTopvarModelDropdown";
import { InfoIcon } from "lucide-react";
import DesktopTopvarAuth from "./DesktopTopvarAuth";

type Props = {};

const DesktopTopvar = (props: Props) => {
  return (
    <div className="flex h-full w-full items-center justify-between px-4">
      <DesktopTopvarModelDropdown />
      <div className="flex items-center justify-center gap-2">
        <p>Memory full</p> <InfoIcon className="size-4" />
      </div>
      <DesktopTopvarAuth />
    </div>
  );
};

export default DesktopTopvar;
