import { Home, DollarSign, BarChart3, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

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
    <aside className="fixed left-4 top-[310px] -translate-y-1/2 z-50 max-w-12 flex items-center w-full">
      <nav className="bg-background border border-border rounded-full shadow-lg p-3">
        <ul className="flex flex-col gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;

            return (
              <motion.li
                key={item.href}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={cn(
                  "flex items-center justify-center size-8 rounded-full transition-colors",
                  "",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                )}
                aria-label={item.label}
                title={item.label}
              >
                <Icon className="size-4" />
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
