import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="min-h-screen flex bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold">
              Bienvenido, David 👋
            </h1>

            <p className="text-muted-foreground mt-1">
              Gestiona tus leads y clientes freelance.
            </p>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">
                  Leads Totales
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  24
                </h3>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">
                  Clientes
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  8
                </h3>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">
                  Presupuestos
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  5
                </h3>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">
                  Conversión
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  33%
                </h3>
              </CardContent>
            </Card>
          </section>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">
                Actividad reciente
              </h3>

              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  Restaurante La Plaza — Contactado por Instagram
                </div>

                <div className="border rounded-lg p-4">
                  Barbería Deluxe — Presupuesto enviado
                </div>

                <div className="border rounded-lg p-4">
                  Clínica Dental Nova — Reunión agendada
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}