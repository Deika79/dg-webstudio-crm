"use client";

import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";

import { SearchInput } from "@/components/leads/search-input";

import {
  formatService,
  formatStatus,
  getStatusColor,
} from "@/lib/lead-utils";

interface Lead {
  id: string;
  businessName: string;
  locality: string;
  status: string;
  serviceType: string;
}

interface LeadsTableProps {
  leads: Lead[];
}

export function LeadsTable({
  leads,
}: LeadsTableProps) {
  const [search, setSearch] = useState("");

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) =>
      lead.businessName
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [leads, search]);

  return (
    <div className="space-y-4">
      <SearchInput
        value={search}
        onChange={setSearch}
      />

      <div className="rounded-xl border overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted/50 border-b">
            <tr className="text-left">
              <th className="p-4 text-sm font-medium">
                Negocio
              </th>

              <th className="p-4 text-sm font-medium">
                Localidad
              </th>

              <th className="p-4 text-sm font-medium">
                Estado
              </th>

              <th className="p-4 text-sm font-medium">
                Servicio
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredLeads.map((lead) => (
              <tr
                key={lead.id}
                className="border-b last:border-0 hover:bg-muted/30 transition-colors"
              >
                <td className="p-4 font-medium">
                  {lead.businessName}
                </td>

                <td className="p-4 text-muted-foreground">
                  {lead.locality}
                </td>

                <td className="p-4">
                  <Badge
                    className={getStatusColor(
                      lead.status
                    )}
                  >
                    {formatStatus(
                      lead.status
                    )}
                  </Badge>
                </td>

                <td className="p-4">
                  {formatService(
                    lead.serviceType
                  )}
                </td>
              </tr>
            ))}

            {filteredLeads.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="p-10 text-center text-muted-foreground"
                >
                  No se encontraron leads.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}