import { FinancialMetrics } from "@/components/revenue/financial-metrics";
import { TransactionsList } from "@/components/revenue/transactions-list";
import { getTransactions, getWallet } from "@/services";
import { useQuery } from "@tanstack/react-query";
import type { ApiError } from "@/types/queries";
import { formatDateChart } from "@/lib/helpers";
import type { ChartData } from "@/types";

// Type guard to check if result is an error
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isApiError(result: any): result is ApiError {
  return result && result.success === false;
}

async function getAllData() {
  const [transactions, walletData] = await Promise.all([
    getTransactions(),
    getWallet(),
  ]);

  // Check for errors
  if (isApiError(transactions)) {
    throw new Error(transactions.message);
  }
  if (isApiError(walletData)) {
    throw new Error(walletData.message);
  }

  return {
    transactions,
    walletData,
  };
}

export default function Revenue() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["allData"],
    queryFn: getAllData,
  });

  const chartData: ChartData[] =
    data?.transactions
      .map((transaction) => ({
        month: formatDateChart(transaction.date),
        balance: transaction.amount,
      }))
      .reverse() ?? [];

  if (isLoading) return <p>Loading all data...</p>;
  if (isError || !data) return <p>Failed to load data.</p>;

  return (
    <>
      <div className="max-w-[1160px] mx-auto px-2">
        <FinancialMetrics
          wallet={data.walletData ?? []}
          chartData={chartData}
        />
        <TransactionsList transactions={data.transactions ?? []} />
      </div>
    </>
  );
}
