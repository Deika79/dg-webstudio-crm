import Link from "next/link";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import {
  formatStatus,
  getStatusColor,
} from "@/lib/lead-utils";

interface RecentLeadsProps {
  leads: {
    id: string;
    businessName: string;
    locality: string;
    status: string;
  }[];
}

export function RecentLeads({
  leads,
}: RecentLeadsProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-lg">
            Leads recientes
          </h3>

          <Link
            href="/leads"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Ver todos
          </Link>
        </div>

        <div className="space-y-4">
          {leads.map((lead) => (
            <Link
              key={lead.id}
              href={`/leads/${lead.id}`}
              className="flex items-center justify-between border rounded-xl p-4 hover:bg-muted/30 transition-colors"
            >
              <div>
                <p className="font-medium">
                  {lead.businessName}
                </p>

                <p className="text-sm text-muted-foreground mt-1">
                  {lead.locality}
                </p>
              </div>

              <Badge
                className={getStatusColor(
                  lead.status
                )}
              >
                {formatStatus(
                  lead.status
                )}
              </Badge>
            </Link>
          ))}

          {leads.length === 0 && (
            <div className="text-center text-muted-foreground py-8">
              No hay leads todavía.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}