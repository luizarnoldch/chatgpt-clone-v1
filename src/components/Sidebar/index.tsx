import React from "react";
import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar/page";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <header className="w-64">
      <div className="hidden h-full w-full md:block">
        <DesktopSidebar />
      </div>
      <div className="md:hidden">
        <MobileSidebar />
      </div>
    </header>
  );
};

export default Sidebar;
