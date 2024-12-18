import React from "react";
import DesktopSidebarTools from "./DesktopSidebarTools";
import DesktopSidebarHistorial from "./DesktopSidebarHistorial.tsx";

type Props = {};

const DesktopSidebar = (props: Props) => {
  return (
    <div className="flex max-h-screen w-full flex-col">
      <DesktopSidebarTools />
      <DesktopSidebarHistorial />
    </div>
  );
};

export default DesktopSidebar;
