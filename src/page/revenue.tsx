import { FinancialMetrics } from "@/components/revenue/financial-metrics";
import { TransactionsList } from "@/components/revenue/transactions-list";
const sampleTransactions = [
  {
    amount: 500,
    metadata: {
      name: "John Doe",
      type: "digital_product",
      email: "johndoe@example.com",
      quantity: 1,
      country: "Nigeria",
      product_name: "Psychology of Money",
    },
    payment_reference: "c3f7123f-186f-4a45-b911-76736e9c5937",
    status: "successful",
    type: "deposit" as const,
    date: "2022-04-03",
  },
];
export default function Revenue() {
  return (
    <>
      <div className="max-w-[1160px] mx-auto px-2">
        <FinancialMetrics />
        <TransactionsList transactions={sampleTransactions} />
      </div>
    </>
  );
}
