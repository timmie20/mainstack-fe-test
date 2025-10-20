"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";

const transactionTypes = [
  { id: "store", label: "Store Transactions" },
  { id: "gift", label: "Gift Typed" },
  { id: "withdrawals", label: "Withdrawals" },
  { id: "chargebacks", label: "Chargebacks" },
  { id: "cashbacks", label: "Cashbacks" },
  { id: "refer", label: "Refer & Earn" },
];

interface TransactionTypeFilterProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export function TransactionTypeFilter({
  value,
  onChange,
}: TransactionTypeFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (id: string) => {
    if (value.includes(id)) {
      onChange(value.filter((item) => item !== id));
    } else {
      onChange([...value, id]);
    }
  };

  const selectedLabels = transactionTypes
    .filter((type) => value.includes(type.id))
    .map((type) => type.label)
    .join(", ");

  return (
    <div className="space-y-4">
      <Label className="text-sm font-medium">Transaction Type</Label>

      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-between bg-transparent"
          >
            <span className="truncate text-left">
              {selectedLabels || "Select transaction types"}
            </span>
            <ChevronDown className="w-4 h-4 ml-2 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56 p-4" align="start">
          <div className="space-y-3">
            {transactionTypes.map((type) => (
              <div key={type.id} className="flex items-center space-x-2">
                <Checkbox
                  id={type.id}
                  checked={value.includes(type.id)}
                  onCheckedChange={() => handleToggle(type.id)}
                />
                <Label
                  htmlFor={type.id}
                  className="text-sm font-normal cursor-pointer"
                >
                  {type.label}
                </Label>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
