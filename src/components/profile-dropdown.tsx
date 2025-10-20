import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { PropsWithChildren } from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";

export function ProfileDropdown({ children }: PropsWithChildren) {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-72 mt-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div>
              <Avatar className="size-10 bg-primary text-primary-foreground">
                <AvatarFallback className="bg-primary text-primary-foreground font-semibold text-base">
                  OI
                </AvatarFallback>
              </Avatar>
            </div>
            <div>
              <p className="text-lg text-foreground font-semibold">John Doe</p>
              <p className="text-sm text-muted-foreground">jane@example.com</p>
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
