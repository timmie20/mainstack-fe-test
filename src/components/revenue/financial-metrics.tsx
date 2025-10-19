import type { WalletDataProps } from "@/types";
import { StatCard } from "./stats-card";
import { ChartLineDefault } from "./chart-line-default";

interface FinancialMetricsProps {
  wallet?: WalletDataProps;
}

export type MutatedData = {
  label: string;
  value: string;
};

export function FinancialMetrics({ wallet }: FinancialMetricsProps) {
  const { balance, ...filteredData } = wallet || {};

  // format key/value pairs to allow easy map
  const formattedData: MutatedData[] = Object.entries(filteredData).map(
    ([key, value]) => ({
      label: key
        .replace(/[_-]/g, " ") // replace underscores or dashes
        .replace(/\b\w/g, (str) => str.toUpperCase()), // capitalize words
      value,
    })
  );

  return (
    <div className="grid grid-cols-[2fr_1fr] gap-6 items-stretch">
      <div className="flex items-stretch flex-1">
        <ChartLineDefault balance={balance ?? ""} />
      </div>

      <div className="flex flex-col justify-between p-4">
        {formattedData.map((item, idx) => (
          <StatCard
            key={idx}
            label={item.label}
            value={item.value}
            tooltip={`Details about ${item.label.toLowerCase()}`}
          />
        ))}
      </div>
    </div>
  );
}
