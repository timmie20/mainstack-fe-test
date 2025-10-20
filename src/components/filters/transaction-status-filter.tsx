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

const transactionStatuses = [
  { id: "successful", label: "Successful" },
  { id: "pending", label: "Pending" },
  { id: "failed", label: "Failed" },
];

interface TransactionStatusFilterProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export function TransactionStatusFilter({
  value,
  onChange,
}: TransactionStatusFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (id: string) => {
    if (value.includes(id)) {
      onChange(value.filter((item) => item !== id));
    } else {
      onChange([...value, id]);
    }
  };

  const selectedLabels = transactionStatuses
    .filter((status) => value.includes(status.id))
    .map((status) => status.label)
    .join(", ");

  return (
    <div className="space-y-4">
      <Label className="text-base font-semibold">Transaction Status</Label>

      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild className="h-12">
          <Button
            variant="outline"
            className="w-full justify-between bg-transparent"
          >
            <span className="truncate text-left">
              {selectedLabels || "Select transaction statuses"}
            </span>
            <ChevronDown className="w-4 h-4 ml-2 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex-1 p-4" align="start">
          <div className="space-y-3">
            {transactionStatuses.map((status) => (
              <div key={status.id} className="flex items-center space-x-2">
                <Checkbox
                  id={status.id}
                  checked={value.includes(status.id)}
                  onCheckedChange={() => handleToggle(status.id)}
                  className="size-5"
                />
                <Label
                  htmlFor={status.id}
                  className="text-base font-semibold cursor-pointer"
                >
                  {status.label}
                </Label>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
