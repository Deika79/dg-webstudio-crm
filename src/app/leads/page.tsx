import { prisma } from "@/lib/prisma";

import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

import { CreateLeadDialog } from "@/components/leads/create-lead-dialog";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default async function LeadsPage() {
  const leads = await prisma.lead.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen flex bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">
                Leads
              </h1>

              <p className="text-muted-foreground mt-1">
                Gestiona tus negocios contactados.
              </p>
            </div>

            <CreateLeadDialog />
          </div>

          <Card>
            <CardContent className="p-0 overflow-x-auto">
              <table className="w-full">
                <thead className="border-b">
                  <tr className="text-left">
                    <th className="p-4">
                      Negocio
                    </th>

                    <th className="p-4">
                      Localidad
                    </th>

                    <th className="p-4">
                      Estado
                    </th>

                    <th className="p-4">
                      Servicio
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {leads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="border-b"
                    >
                      <td className="p-4 font-medium">
                        {lead.businessName}
                      </td>

                      <td className="p-4">
                        {lead.locality}
                      </td>

                      <td className="p-4">
                        {lead.status}
                      </td>

                      <td className="p-4">
                        {lead.serviceType}
                      </td>
                    </tr>
                  ))}

                  {leads.length === 0 && (
                    <tr>
                      <td
                        colSpan={4}
                        className="p-8 text-center text-muted-foreground"
                      >
                        No hay leads todavía.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}