"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

import { AnimatePresence, motion } from "motion/react";
import { DateRangeFilter } from "./date-range-filter";
import { TransactionTypeFilter } from "./transaction-type-filters";
import { TransactionStatusFilter } from "./transaction-status-filter";

export interface FilterState {
  dateRange: {
    preset?: string;
    startDate?: string;
    endDate?: string;
  };
  transactionTypes: string[];
  transactionStatuses: string[];
}

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: FilterState) => void;
}

export function FilterDrawer({ isOpen, onClose, onApply }: FilterDrawerProps) {
  const [filters, setFilters] = useState<FilterState>({
    dateRange: {},
    transactionTypes: [],
    transactionStatuses: [],
  });

  const handleApply = () => {
    onApply(filters);
    onClose();
  };

  const handleClear = () => {
    setFilters({
      dateRange: {},
      transactionTypes: [],
      transactionStatuses: [],
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white border-l border-border z-50 flex flex-col shadow-lg rounded-[20px] "
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-lg font-semibold">Filter</h2>
              <button
                onClick={onClose}
                className="p-1 hover:bg-muted rounded-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 w-full">
              <DateRangeFilter
                value={filters.dateRange}
                onChange={(dateRange) => setFilters({ ...filters, dateRange })}
              />

              <TransactionTypeFilter
                value={filters.transactionTypes}
                onChange={(transactionTypes) =>
                  setFilters({ ...filters, transactionTypes })
                }
              />

              <TransactionStatusFilter
                value={filters.transactionStatuses}
                onChange={(transactionStatuses) =>
                  setFilters({ ...filters, transactionStatuses })
                }
              />
            </div>

            {/* Footer */}
            <div className=" p-6 flex gap-3">
              <Button
                variant="outline"
                onClick={handleClear}
                className="flex-1 bg-transparent rounded-full py-3 px-6"
              >
                Clear
              </Button>
              <Button
                onClick={handleApply}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90  rounded-full py-3 px-6"
              >
                Apply
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
