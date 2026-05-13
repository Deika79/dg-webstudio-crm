"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function Header() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="h-16 border-b bg-card px-6 flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-lg">
            Dashboard
          </h2>
        </div>
      </header>
    );
  }

  return (
    <header className="h-16 border-b bg-card px-6 flex items-center justify-between">
      <div>
        <h2 className="font-semibold text-lg">
          Dashboard
        </h2>
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={() =>
          setTheme(theme === "dark" ? "light" : "dark")
        }
      >
        {theme === "dark" ? (
          <Sun size={18} />
        ) : (
          <Moon size={18} />
        )}
      </Button>
    </header>
  );
}