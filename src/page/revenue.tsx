import { FinancialMetrics } from "@/components/revenue/financial-metrics";
import { TransactionsList } from "@/components/revenue/transactions-list";
import { getTransactions, getWallet } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { formatDateChart } from "@/lib/helpers";
import type { ChartData } from "@/types";
import { isApiError } from "@/lib/api";
import Loader from "@/components/loader";

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

  if (isLoading) return <Loader />;
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
