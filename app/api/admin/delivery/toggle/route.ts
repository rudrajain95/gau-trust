import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const id = body.id;
    const active = body.active;

    await prisma.deliveryBoy.update({
      where: { id },
      data: { active }
    });

    return Response.json({ success: true });

  } catch (error) {
    return Response.json({
      success: false,
      message: "Error"
    });
  }
}
