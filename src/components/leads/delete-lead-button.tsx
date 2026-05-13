"use client";

import { useRouter } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";

interface DeleteLeadButtonProps {
  leadId: string;
}

export function DeleteLeadButton({
  leadId,
}: DeleteLeadButtonProps) {
  const router = useRouter();

  async function handleDelete() {
    try {
      const response = await fetch(
        `/api/leads/${leadId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      router.push("/leads");

      router.refresh();
    } catch (error) {
      console.error(error);

      alert("Error eliminando lead");
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          Eliminar
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            ¿Eliminar lead?
          </AlertDialogTitle>

          <AlertDialogDescription>
            Esta acción no se puede deshacer.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>
            Cancelar
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={handleDelete}
          >
            Eliminar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}