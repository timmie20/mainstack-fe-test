import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

export default function UserAvatar() {
  return (
    <>
      <Avatar className="h-8 w-8 bg-primary text-primary-foreground">
        <AvatarFallback className="bg-primary text-primary-foreground font-semibold text-xs">
          OI
        </AvatarFallback>
      </Avatar>{" "}
      <Button
        variant="ghost"
        size="icon"
        className="text-foreground hover:bg-muted"
      >
        <Menu className="h-5 w-5" />
      </Button>
    </>
  );
}
