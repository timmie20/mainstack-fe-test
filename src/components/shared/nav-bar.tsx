"use client";

import { useState } from "react";
import { Bell, MessageSquare, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getNavIcon } from "@/lib/icons";
import AppLogo from "../../assets/app-logo";
import { motion } from "motion/react";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: "home" },
  { id: "analytics", label: "Analytics", icon: "analytics" },
  { id: "revenue", label: "Revenue", icon: "revenue" },
  { id: "crm", label: "CRM", icon: "crm" },
  { id: "apps", label: "Apps", icon: "apps" },
];

export function Navbar() {
  const [activeItem, setActiveItem] = useState("revenue");

  return (
    <nav className="">
      <div className="mt-4 w-full mx-auto border-2 border-white shadow-sm rounded-full flex items-center justify-between px-6 py-4">
        <AppLogo />

        {/* Center Navigation */}
        <div className="flex items-center gap-5">
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.id}
              item={item}
              isActive={activeItem === item.id}
              onClick={() => setActiveItem(item.id)}
            />
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground hover:bg-muted"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground hover:bg-muted"
          >
            <MessageSquare className="h-5 w-5" />
          </Button>
          <div className="flex gap-2 pr-3 pl-[5px] py-1 bg-[#EFF1F6] rounded-full items-center justify-center">
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
          </div>
        </div>
      </div>
    </nav>
  );
}

interface NavItemProps {
  item: {
    id: string;
    label: string;
    icon: string;
  };
  isActive: boolean;
  onClick: () => void;
}

export function NavItem({ item, isActive, onClick }: NavItemProps) {
  const Icon = getNavIcon(item.icon);

  return (
    <motion.div
      initial={false}
      animate={{
        scale: isActive ? 1 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      <Button
        onClick={onClick}
        variant={isActive ? "default" : "ghost"}
        className={`relative gap-2 rounded-full px-[18px] py-2 transition-all cursor-pointer ${
          isActive
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-foreground hover:bg-muted"
        }`}
      >
        {Icon && <Icon className="h-4 w-4" />}
        <span className="text-base font-semibold">{item.label}</span>

        {/* Animated background indicator */}
        {isActive && (
          <motion.div
            layoutId="active-indicator"
            className="absolute inset-0 rounded-full bg-primary -z-10"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          />
        )}
      </Button>
    </motion.div>
  );
}
