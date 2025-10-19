import type React from "react";
import { Home, BarChart3, DollarSign, Users, Grid3x3 } from "lucide-react";

export function getNavIcon(iconName: string) {
  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    home: Home,
    analytics: BarChart3,
    revenue: DollarSign,
    crm: Users,
    apps: Grid3x3,
  };
  return icons[iconName];
}
