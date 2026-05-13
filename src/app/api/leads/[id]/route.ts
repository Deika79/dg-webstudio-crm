import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

interface Params {
  params: {
    id: string;
  };
}

export async function DELETE(
  req: Request,
  { params }: Params
) {
  try {
    await prisma.lead.delete({
      where: {
        id: params.id,
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