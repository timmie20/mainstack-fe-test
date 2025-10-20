/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { TransactionRow } from "./transaction-row";
import { Separator } from "../ui/separator";
import type { Transaction } from "@/types";
import { FilterButton } from "../filters/filter-button";
import { FilterDrawer, type FilterState } from "../filters/filter-drawer";

interface TransactionsListProps {
  transactions: Transaction[];
  subtitle?: string;
}

export function TransactionsList({
  transactions,
  subtitle = "Your transactions for the last 7 days",
}: TransactionsListProps) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState<FilterState>({
    dateRange: { preset: "today" },
    transactionTypes: [],
    transactionStatuses: [],
  });

  const handleExport = () => {
    // Export functionality can be implemented here
    console.log("Exporting transactions...");
  };

  return (
    <div className="w-full mt-12">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            {transactions.length} Transactions
          </h2>
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <FilterButton
            onClick={() => setFilterOpen(true)}
            filters={appliedFilters}
          />

          <Button
            variant="outline"
            size="sm"
            className="gap-2 bg-gray-50 py-3 text-base font-semibold h-12 w-[139px] rounded-full"
            onClick={handleExport}
          >
            Export list
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <Separator />

      {/* Transactions List */}
      <div className="space-y-0">
        {transactions.length > 0 ? (
          transactions.map((transaction, idx) => (
            <TransactionRow key={idx} transaction={transaction} />
          ))
        ) : (
          <div className="py-8 text-center text-muted-foreground">
            No transactions found
          </div>
        )}
      </div>

      <FilterDrawer
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
        onApply={(filters) => setAppliedFilters(filters)}
      />
    </div>
  );
}
