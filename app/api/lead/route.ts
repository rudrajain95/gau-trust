import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

const lead = await prisma.lead.create({
      data: {
        name: body.name,
        mobile: body.mobile,
        address: body.address,
        quantity: body.quantity,
        time: body.time,
      },
    });

    return Response.json({ success: true, lead });
  } catch (error) {
    console.error("API ERROR:", error);
    return Response.json({ success: false });
  }
}
