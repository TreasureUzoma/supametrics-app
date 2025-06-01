"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Filter } from "lucide-react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

type FilterDropdownProps = {
  id: string;
  multiple?: boolean;
  options?: string[];
  onChange?: (selected: string[]) => void;
};

export default function FilterDropdown({
  id,
  multiple = true,
  options = [],
  onChange,
}: FilterDropdownProps) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Load saved filters from localStorage or default to first option
  useEffect(() => {
    const saved = localStorage.getItem(`filter-dropdown-${id}`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setSelectedFilters(parsed);
          return;
        }
      } catch {
        // ignore invalid JSON
      }
    }

    if (options.length > 0) {
      const defaultSelection = multiple ? [options[0]] : [options[0]];
      setSelectedFilters(defaultSelection);
    }
  }, [id, options, multiple]);

  // Save to localStorage and notify parent
  useEffect(() => {
    localStorage.setItem(
      `filter-dropdown-${id}`,
      JSON.stringify(selectedFilters)
    );
    onChange?.(selectedFilters);
  }, [id, selectedFilters, onChange]);

  const handleSelect = (option: string) => {
    let updated: string[];
    if (multiple) {
      updated = selectedFilters.includes(option)
        ? selectedFilters.filter((f) => f !== option)
        : [...selectedFilters, option];
    } else {
      updated = [option];
    }
    setSelectedFilters(updated);
  };

  return (
    <div className="flex items-center gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            <span>
              {selectedFilters.length > 0
                ? selectedFilters[0] // First selected filter only
                : "Filter by"}
            </span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start" className="w-56">
          {options.map((option) =>
            multiple ? (
              <DropdownMenuCheckboxItem
                key={option}
                checked={selectedFilters.includes(option)}
                onCheckedChange={() => handleSelect(option)}
              >
                {option}
              </DropdownMenuCheckboxItem>
            ) : (
              <DropdownMenuItem
                key={option}
                onClick={() => handleSelect(option)}
                className={
                  selectedFilters.includes(option) ? "font-semibold" : ""
                }
              >
                {option}
              </DropdownMenuItem>
            )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
