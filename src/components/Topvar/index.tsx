import React from "react";
import DesktopTopvar from "./DesktopTopvar";
import MobileTopvar from "./MobileTopvar";

type Props = {};

const Topvar = (props: Props) => {
  return (
    <div className="h-16 w-full">
      <div className="hidden h-full w-full md:block">
        <DesktopTopvar />
      </div>
      <div className="md:hidden">
        <MobileTopvar />
      </div>
    </div>
  );
};

export default Topvar;
