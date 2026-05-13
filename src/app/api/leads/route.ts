import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(leads);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Error obteniendo leads" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const lead = await prisma.lead.create({
      data: {
        businessName: body.businessName,
        locality: body.locality,

        contactName: body.contactName,
        email: body.email,
        phone: body.phone,

        website: body.website,
        instagram: body.instagram,

        notes: body.notes,

        estimatedBudget: body.estimatedBudget,

        status: body.status,
        contactMethod: body.contactMethod,
        serviceType: body.serviceType,
      },
    });

    return NextResponse.json(lead);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Error creando lead" },
      { status: 500 }
    );
  }
}