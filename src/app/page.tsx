import { prisma } from "@/lib/prisma";

import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

import { StatsCard } from "@/components/dashboard/stats-card";

import { RecentLeads } from "@/components/dashboard/recent-leads";

export default async function HomePage() {
  const totalLeads =
    await prisma.lead.count();

  const totalClients =
    await prisma.lead.count({
      where: {
        status: "CLIENT",
      },
    });

  const proposalSent =
    await prisma.lead.count({
      where: {
        status: "PROPOSAL_SENT",
      },
    });

  const interestedLeads =
    await prisma.lead.count({
      where: {
        OR: [
          {
            status: "INTERESTED",
          },
          {
            status: "MEETING",
          },
        ],
      },
    });

  const recentLeads =
    await prisma.lead.findMany({
      take: 5,

      orderBy: {
        createdAt: "desc",
      },

      select: {
        id: true,
        businessName: true,
        locality: true,
        status: true,
      },
    });

  const conversionRate =
    totalLeads > 0
      ? Math.round(
          (totalClients /
            totalLeads) *
            100
        )
      : 0;

  return (
    <main className="min-h-screen flex bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold">
              Dashboard
            </h1>

            <p className="text-muted-foreground mt-1">
              Resumen general de tu CRM freelance.
            </p>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <StatsCard
              title="Leads Totales"
              value={totalLeads}
            />

            <StatsCard
              title="Clientes"
              value={totalClients}
            />

            <StatsCard
              title="Presupuestos"
              value={proposalSent}
            />

            <StatsCard
              title="Conversión"
              value={`${conversionRate}%`}
            />
          </section>

          <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <RecentLeads
                leads={recentLeads}
              />
            </div>

            <StatsCard
              title="Leads interesados"
              value={interestedLeads}
              description="Negocios con interés activo."
            />
          </section>
        </div>
      </div>
    </main>
  );
}