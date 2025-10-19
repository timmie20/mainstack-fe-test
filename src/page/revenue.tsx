import { FinancialMetrics } from "@/components/revenue/financial-metrics";
import { TransactionsList } from "@/components/revenue/transactions-list";
import { getTransactions, getWallet } from "@/services";
import { useQuery } from "@tanstack/react-query";

async function getAllData() {
  const [transactions, walletData] = await Promise.all([
    getTransactions(),
    getWallet(),
  ]);

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

  console.log(data);
  if (isLoading) return <p>Loading all data...</p>;
  if (isError || !data) return <p>Failed to load data.</p>;

  return (
    <>
      <div className="max-w-[1160px] mx-auto px-2">
        <FinancialMetrics wallet={data.walletData ?? []} />
        <TransactionsList transactions={data.transactions ?? []} />
      </div>
    </>
  );
}
