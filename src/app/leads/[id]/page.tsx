import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";

import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

import { DeleteLeadButton } from "@/components/leads/delete-lead-button";

import {
  formatService,
  formatStatus,
} from "@/lib/lead-utils";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

interface LeadPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function LeadPage({
  params,
}: LeadPageProps) {
  const { id } = await params;

  const lead = await prisma.lead.findUnique({
    where: {
      id,
    },
  });

  if (!lead) {
    notFound();
  }

  return (
    <main className="min-h-screen flex bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <div className="p-6 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">
                {lead.businessName}
              </h1>

              <p className="text-muted-foreground mt-1">
                Lead registrado en el CRM.
              </p>
            </div>

            <DeleteLeadButton
              leadId={lead.id}
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <Card className="xl:col-span-2">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-4">
                    Información general
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InfoItem
                      label="Negocio"
                      value={lead.businessName}
                    />

                    <InfoItem
                      label="Localidad"
                      value={lead.locality}
                    />

                    <InfoItem
                      label="Contacto"
                      value={
                        lead.contactName ??
                        "-"
                      }
                    />

                    <InfoItem
                      label="Email"
                      value={
                        lead.email ?? "-"
                      }
                    />

                    <InfoItem
                      label="Teléfono"
                      value={
                        lead.phone ?? "-"
                      }
                    />

                    <InfoItem
                      label="Instagram"
                      value={
                        lead.instagram ??
                        "-"
                      }
                    />

                    <InfoItem
                      label="Website"
                      value={
                        lead.website ?? "-"
                      }
                    />

                    <InfoItem
                      label="Presupuesto"
                      value={
                        lead.estimatedBudget
                          ? `${lead.estimatedBudget} €`
                          : "-"
                      }
                    />
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4">
                    Notas
                  </h3>

                  <div className="rounded-xl border p-4 text-muted-foreground">
                    {lead.notes ||
                      "Sin notas"}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-4">
                    Estado
                  </h3>

                  <Badge>
                    {formatStatus(
                      lead.status
                    )}
                  </Badge>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Servicio
                  </h3>

                  <p className="text-muted-foreground">
                    {formatService(
                      lead.serviceType
                    )}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Creado
                  </h3>

                  <p className="text-muted-foreground">
                    {new Date(
                      lead.createdAt
                    ).toLocaleDateString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">
        {label}
      </p>

      <p className="font-medium mt-1 break-all">
        {value}
      </p>
    </div>
  );
}