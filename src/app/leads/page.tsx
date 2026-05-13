import { prisma } from "@/lib/prisma";

import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

import { CreateLeadDialog } from "@/components/leads/create-lead-dialog";

import { LeadsTable } from "@/components/leads/leads-table";

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
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
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

          <LeadsTable leads={leads} />
        </div>
      </div>
    </main>
  );
}