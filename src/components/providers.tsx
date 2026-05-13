"use client";

import { ThemeProvider } from "next-themes";

import { AuthSessionProvider } from "@/components/session-provider";

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
    >
      <AuthSessionProvider>
        {children}
      </AuthSessionProvider>
    </ThemeProvider>
  );
}