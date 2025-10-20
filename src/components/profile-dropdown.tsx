import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useUserStore } from "@/store/user-store";
import type { PropsWithChildren } from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { getInitials } from "@/lib/helpers";

export function ProfileDropdown({ children }: PropsWithChildren) {
  const user = useUserStore((state) => state.user);

  const initials = getInitials(user?.first_name, user?.last_name);
  const fullName = user ? `${user.first_name} ${user.last_name}` : "User";
  const email = user?.email || "No email";

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-72 mt-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div>
              <Avatar className="size-10 bg-primary text-primary-foreground">
                <AvatarFallback className="bg-primary text-primary-foreground font-semibold text-base">
                  {initials}
                </AvatarFallback>
              </Avatar>
            </div>
            <div>
              <p className="text-lg text-foreground font-semibold">
                {fullName}
              </p>
              <p className="text-sm text-muted-foreground">{email}</p>
            </div>
          </div>

          <hr className="my-2" />

          <button className="w-full text-left hover:bg-muted p-2 rounded-md">
            Profile
          </button>
          <button className="w-full text-left hover:bg-muted p-2 rounded-md">
            Settings
          </button>
          <button className="w-full text-left hover:bg-muted p-2 rounded-md text-red-500">
            Log out
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
