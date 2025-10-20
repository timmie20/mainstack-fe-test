"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter } from "lucide-react";
import type { FilterState } from "./filter-drawer";

interface FilterButtonProps {
  onClick: () => void;
  filters: FilterState;
}

export function FilterButton({ onClick, filters }: FilterButtonProps) {
  const getFilterCount = () => {
    let count = 0;
    if (filters.dateRange.preset !== "today") count++;
    if (filters.transactionTypes.length > 0)
      count += filters.transactionTypes.length;
    if (filters.transactionStatuses.length > 0)
      count += filters.transactionStatuses.length;
    return count;
  };

  const filterCount = getFilterCount();

  return (
    <Button
      variant="outline"
      onClick={onClick}
      className="relative gap-2 bg-gray-50 py-3 text-base font-semibold w-fit h-12 min-w-[106px] rounded-full"
    >
      <Filter className="w-4 h-4 mr-2" />
      Filter
      {filterCount > 0 && (
        <Badge
          variant="default"
          className="ml-1 bg-primary text-primary-foreground rounded-full"
        >
          {filterCount}
        </Badge>
      )}
    </Button>
  );
}
