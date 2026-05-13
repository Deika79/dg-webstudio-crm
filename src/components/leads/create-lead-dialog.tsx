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

export function CreateLeadDialog() {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    businessName: "",
    locality: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    instagram: "",
    notes: "",

    estimatedBudget: "",

    status: "PENDING",
    contactMethod: "EMAIL",
    serviceType: "NEW_WEBSITE",
  });

  async function handleSubmit() {
    try {
      setLoading(true);

      const response = await fetch("/api/leads", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          ...formData,
          estimatedBudget: formData.estimatedBudget
            ? Number(formData.estimatedBudget)
            : null,
        }),
      });

      if (!response.ok) {
        throw new Error("Error creando lead");
      }

      setOpen(false);

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Error creando lead");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          Nuevo Lead
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            Crear nuevo lead
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Nombre del negocio"
            value={formData.businessName}
            onChange={(e) =>
              setFormData({
                ...formData,
                businessName: e.target.value,
              })
            }
          />

          <Input
            placeholder="Localidad"
            value={formData.locality}
            onChange={(e) =>
              setFormData({
                ...formData,
                locality: e.target.value,
              })
            }
          />

          <Input
            placeholder="Persona de contacto"
            value={formData.contactName}
            onChange={(e) =>
              setFormData({
                ...formData,
                contactName: e.target.value,
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
                website: e.target.value,
              })
            }
          />

          <Input
            placeholder="Instagram"
            value={formData.instagram}
            onChange={(e) =>
              setFormData({
                ...formData,
                instagram: e.target.value,
              })
            }
          />

          <Input
            placeholder="Presupuesto estimado"
            type="number"
            value={formData.estimatedBudget}
            onChange={(e) =>
              setFormData({
                ...formData,
                estimatedBudget: e.target.value,
              })
            }
          />

          <Select
            value={formData.contactMethod}
            onValueChange={(value) =>
              setFormData({
                ...formData,
                contactMethod: value,
              })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Método contacto" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="EMAIL">
                Email
              </SelectItem>

              <SelectItem value="PHONE">
                Teléfono
              </SelectItem>

              <SelectItem value="INSTAGRAM">
                Instagram
              </SelectItem>

              <SelectItem value="WHATSAPP">
                WhatsApp
              </SelectItem>

              <SelectItem value="IN_PERSON">
                Presencial
              </SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={formData.serviceType}
            onValueChange={(value) =>
              setFormData({
                ...formData,
                serviceType: value,
              })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Servicio" />
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
          placeholder="Notas..."
          value={formData.notes}
          onChange={(e) =>
            setFormData({
              ...formData,
              notes: e.target.value,
            })
          }
        />

        <Button
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading
            ? "Creando..."
            : "Crear lead"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}