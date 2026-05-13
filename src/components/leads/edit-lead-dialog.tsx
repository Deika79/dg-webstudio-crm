"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EditLeadDialogProps {
  lead: {
    id: string;
    businessName: string;
    locality: string;

    contactName: string | null;

    email: string | null;

    phone: string | null;

    website: string | null;

    instagram: string | null;

    notes: string | null;

    estimatedBudget: number | null;

    status: string;

    contactMethod: string;

    serviceType: string;
  };
}

export function EditLeadDialog({
  lead,
}: EditLeadDialogProps) {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [open, setOpen] =
    useState(false);

  const [formData, setFormData] =
    useState({
      businessName:
        lead.businessName,

      locality: lead.locality,

      contactName:
        lead.contactName || "",

      email: lead.email || "",

      phone: lead.phone || "",

      website: lead.website || "",

      instagram:
        lead.instagram || "",

      notes: lead.notes || "",

      estimatedBudget:
        lead.estimatedBudget?.toString() ||
        "",

      status: lead.status,

      contactMethod:
        lead.contactMethod,

      serviceType:
        lead.serviceType,
    });

  async function handleUpdate() {
    try {
      setLoading(true);

      const response = await fetch(
        `/api/leads/${lead.id}`,
        {
          method: "PATCH",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            ...formData,

            estimatedBudget:
              formData.estimatedBudget
                ? Number(
                    formData.estimatedBudget
                  )
                : null,
          }),
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      setOpen(false);

      router.refresh();
    } catch (error) {
      console.error(error);

      alert(
        "Error actualizando lead"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button>
          Editar
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            Editar lead
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Negocio"
            value={
              formData.businessName
            }
            onChange={(e) =>
              setFormData({
                ...formData,

                businessName:
                  e.target.value,
              })
            }
          />

          <Input
            placeholder="Localidad"
            value={formData.locality}
            onChange={(e) =>
              setFormData({
                ...formData,

                locality:
                  e.target.value,
              })
            }
          />

          <Input
            placeholder="Contacto"
            value={
              formData.contactName
            }
            onChange={(e) =>
              setFormData({
                ...formData,

                contactName:
                  e.target.value,
              })
            }
          />

          <Input
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,

                email: e.target.value,
              })
            }
          />

          <Input
            placeholder="Teléfono"
            value={formData.phone}
            onChange={(e) =>
              setFormData({
                ...formData,

                phone: e.target.value,
              })
            }
          />

          <Input
            placeholder="Website"
            value={formData.website}
            onChange={(e) =>
              setFormData({
                ...formData,

                website:
                  e.target.value,
              })
            }
          />

          <Input
            placeholder="Instagram"
            value={formData.instagram}
            onChange={(e) =>
              setFormData({
                ...formData,

                instagram:
                  e.target.value,
              })
            }
          />

          <Input
            placeholder="Presupuesto"
            type="number"
            value={
              formData.estimatedBudget
            }
            onChange={(e) =>
              setFormData({
                ...formData,

                estimatedBudget:
                  e.target.value,
              })
            }
          />

          <Select
            value={formData.status}
            onValueChange={(value) =>
              setFormData({
                ...formData,

                status: value,
              })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="PENDING">
                Pendiente
              </SelectItem>

              <SelectItem value="CONTACTED">
                Contactado
              </SelectItem>

              <SelectItem value="INTERESTED">
                Interesado
              </SelectItem>

              <SelectItem value="MEETING">
                Reunión
              </SelectItem>

              <SelectItem value="PROPOSAL_SENT">
                Presupuesto
              </SelectItem>

              <SelectItem value="CLIENT">
                Cliente
              </SelectItem>

              <SelectItem value="REJECTED">
                Rechazado
              </SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={formData.serviceType}
            onValueChange={(value) =>
              setFormData({
                ...formData,

                serviceType:
                  value,
              })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="NEW_WEBSITE">
                Web nueva
              </SelectItem>

              <SelectItem value="REDESIGN">
                Rediseño
              </SelectItem>

              <SelectItem value="SEO">
                SEO
              </SelectItem>

              <SelectItem value="MAINTENANCE">
                Mantenimiento
              </SelectItem>

              <SelectItem value="ECOMMERCE">
                Ecommerce
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Textarea
          placeholder="Notas"
          value={formData.notes}
          onChange={(e) =>
            setFormData({
              ...formData,

              notes: e.target.value,
            })
          }
        />

        <Button
          onClick={handleUpdate}
          disabled={loading}
        >
          {loading
            ? "Guardando..."
            : "Guardar cambios"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}