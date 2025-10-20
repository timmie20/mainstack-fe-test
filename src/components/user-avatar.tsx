import React from "react";
import { Menu } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useUserStore } from "@/store/user-store";
import { getInitials } from "@/lib/helpers";

export default function UserAvatar() {
  const { user } = useUserStore();
  return (
    <>
      <Avatar className="h-8 w-8 bg-primary text-primary-foreground">
        <AvatarFallback className="bg-primary text-primary-foreground font-semibold text-xs">
          {getInitials(user?.first_name, user?.last_name)}
        </AvatarFallback>
      </Avatar>{" "}
      <div className="text-foreground hover:bg-muted">
        <Menu className="h-5 w-5" />
      </div>
    </>
  );
}
