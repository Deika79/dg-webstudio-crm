import { Sidebar } from "@/components/layout/sidebar";

import { Header } from "@/components/layout/header";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function ClientesPage() {
  return (
    <main className="min-h-screen flex bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold">
              Clientes
            </h1>

            <p className="text-muted-foreground mt-1">
              Gestiona tus clientes activos.
            </p>
          </div>

          <Card>
            <CardContent className="p-10 text-center">
              <h2 className="text-xl font-semibold">
                Próximamente
              </h2>

              <p className="text-muted-foreground mt-2">
                Aquí podrás gestionar clientes,
                proyectos y mantenimiento web.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}