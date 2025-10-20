"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";

interface DateRangeFilterProps {
  value: {
    startDate?: string;
    endDate?: string;
  };
  onChange: (value: DateRangeFilterProps["value"]) => void;
}

export function DateRangeFilter({ value, onChange }: DateRangeFilterProps) {
  return (
    <div className="space-y-4">
      <Label className="text-sm font-medium">Date Range</Label>

      <div className="space-y-3">
        <div className="flex gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 justify-start text-left font-normal bg-transparent"
              >
                <CalendarIcon className="w-4 h-4 mr-2" />
                {value.startDate || "Start date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={
                  value.startDate ? new Date(value.startDate) : undefined
                }
                onSelect={(date) =>
                  onChange({
                    ...value,
                    startDate: date?.toISOString().split("T")[0],
                  })
                }
              />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 justify-start text-left font-normal bg-transparent"
              >
                <CalendarIcon className="w-4 h-4 mr-2" />
                {value.endDate || "End date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={value.endDate ? new Date(value.endDate) : undefined}
                onSelect={(date) =>
                  onChange({
                    ...value,
                    endDate: date?.toISOString().split("T")[0],
                  })
                }
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
