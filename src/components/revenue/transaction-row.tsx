import { formatAmount, formatDate } from "@/lib/helpers";
import type { Transaction } from "@/types";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

interface TransactionRowProps {
  transaction: Transaction;
}

export function TransactionRow({ transaction }: TransactionRowProps) {
  const isDeposit = transaction.type === "deposit";
  const isWithdrawal = transaction.type === "withdrawal";
  const iconBgColor = isDeposit ? "bg-green-100" : "bg-red-100";
  const iconColor = isDeposit ? "text-green-600" : "text-red-600";
  const Icon = isDeposit ? ArrowDownLeft : ArrowUpRight;

  return (
    <div className="flex items-center justify-between py-4 px-0 border-b border-border last:border-b-0">
      {/* Left: Icon and Product Info */}
      <div className="flex items-center gap-4 flex-1">
        <div className={`${iconBgColor} rounded-full p-3 flex-shrink-0`}>
          <Icon className={`${iconColor} w-5 h-5`} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-foreground truncate">
            {!transaction.metadata && isWithdrawal
              ? "Cash withdrawal "
              : transaction.metadata.product_name}
          </p>
          <p className="text-sm text-muted-foreground truncate">
            {isDeposit && transaction.status === "successful"
              ? transaction.metadata.name
              : "pending"}
          </p>
        </div>
      </div>

      {/* Right: Amount and Date */}
      <div className="flex flex-col items-end gap-1 flex-shrink-0 ml-4">
        <p className="font-bold text-foreground">
          {formatAmount(transaction.amount)}
        </p>
        <p className="text-sm text-muted-foreground">
          {formatDate(transaction.date)}
        </p>
      </div>
    </div>
  );
}
