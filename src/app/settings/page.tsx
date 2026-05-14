import { Sidebar } from "@/components/layout/sidebar";

import { Header } from "@/components/layout/header";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <main className="min-h-screen flex bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <div className="p-6">
          <Card>
            <CardContent className="p-10 text-center">
              <h1 className="text-2xl font-bold">
                Ajustes
              </h1>

              <p className="text-muted-foreground mt-2">
                Próximamente.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}