import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";
import React from "react";

type Props = {};

const DesktopTopvarAuth = (props: Props) => {
  return (
    <Button size="icon">
      <UserIcon />
    </Button>
  );
};

export default DesktopTopvarAuth;
