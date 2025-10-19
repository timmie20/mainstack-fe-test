"use client";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Button } from "../ui/button";

export const description = "A line chart";

interface ChartLineDefaultProps {
  balance: string;
}

const chartData = [
  { month: "May 31", balance: 10 },
  { month: "April 1", balance: 200 },
  { month: "April 5", balance: 120 },
  { month: "April 10", balance: 180 },
  { month: "April 15", balance: 150 },
  { month: "April 20", balance: 190 },
  { month: "April 25", balance: 200 },
  { month: "April 31", balance: 214 },
];

const chartConfig = {
  balance: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ChartLineDefault({ balance }: ChartLineDefaultProps) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-[64px]">
        <div>
          <p className="text-sm text-gray-400">Available Balance</p>
          <p className="text-[36px] font-bold">{balance}</p>
        </div>
        <Button className="tracking-tight w-[167px] cursor-pointer px-[28px] py-[14px] h-[52px] rounded-full">
          Withdraw
        </Button>
      </div>
      <ChartContainer config={chartConfig} className="h-[340px] mt-6 w-full">
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 40,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="balance"
            type="natural"
            stroke="var(--color-balance)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
