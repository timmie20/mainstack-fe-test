import { Home, DollarSign, BarChart3, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    icon: Home,
    href: "/",
    label: "Home",
  },
  {
    icon: BarChart3,
    href: "/analytics",
    label: "Analytics",
  },
  {
    icon: DollarSign,
    href: "/revenue",
    label: "Revenue",
  },
  {
    icon: Users,
    href: "/customers",
    label: "Customers",
  },
];

export default function MiniSideBar() {
  return (
    <aside className="fixed left-6 top-[40%] -translate-y-1/2 z-50">
      <nav className="bg-background border border-border rounded-full shadow-lg p-3">
        <ul className="flex flex-col gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;

            return (
              <li
                key={item.href}
                className={cn(
                  "flex items-center justify-center size-8 rounded-full transition-colors",
                  "hover:bg-muted",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                )}
                aria-label={item.label}
                title={item.label}
              >
                <Icon className="size-4" />
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
