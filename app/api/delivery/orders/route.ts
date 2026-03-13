import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const orders = await prisma.order.findMany({
    where: {
      shopStatus: {
        in: ["Accepted", "Preparing", "Ready"]
      }
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  return NextResponse.json(orders);
}
