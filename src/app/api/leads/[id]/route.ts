import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function DELETE(
  req: Request,
  { params }: Params
) {
  try {
    const { id } = await params;

    await prisma.lead.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Error eliminando lead",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PATCH(
  req: Request,
  { params }: Params
) {
  try {
    const { id } = await params;

    const body = await req.json();

    const updatedLead =
      await prisma.lead.update({
        where: {
          id,
        },

        data: {
          businessName:
            body.businessName,

          locality: body.locality,

          contactName:
            body.contactName,

          email: body.email,

          phone: body.phone,

          website: body.website,

          instagram:
            body.instagram,

          notes: body.notes,

          estimatedBudget:
            body.estimatedBudget,

          status: body.status,

          contactMethod:
            body.contactMethod,

          serviceType:
            body.serviceType,
        },
      });

    return NextResponse.json(
      updatedLead
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Error actualizando lead",
      },
      {
        status: 500,
      }
    );
  }
}