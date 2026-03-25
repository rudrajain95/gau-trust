import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const data = await prisma.deliveryBoy.findMany({
    orderBy: { createdAt: "desc" }
  });

  return Response.json(data);
}
