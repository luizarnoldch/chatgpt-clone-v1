import React from "react";

type LayoutAssistantsProps = {
  children?: React.ReactNode;
};

const LayoutAssistants = ({ children }: LayoutAssistantsProps) => {
  return <div>{children}</div>;
};

export default LayoutAssistants;
