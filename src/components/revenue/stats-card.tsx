import { Info } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  tooltip?: string;
}

export function StatCard({ label, value, tooltip }: StatCardProps) {
  return (
    <div className="flex items-start justify-between">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-[28px] font-bold tracking-tight">USD {value}</p>
      </div>
      <button
        className="rounded-full p-2 hover:bg-muted transition-colors"
        title={tooltip}
        aria-label={`Info about ${label}`}
      >
        <Info className="h-4 w-4 text-muted-foreground" />
      </button>
    </div>
  );
}
