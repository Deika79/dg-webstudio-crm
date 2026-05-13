"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({
  value,
  onChange,
}: SearchInputProps) {
  return (
    <div className="relative w-full md:w-80">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
      />

      <Input
        placeholder="Buscar negocio..."
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="pl-10"
      />
    </div>
  );
}