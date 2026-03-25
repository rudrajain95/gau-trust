export const dynamic = "force-dynamic";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const deliveryBoyId = searchParams.get("deliveryBoyId") || "";

    const whereClause: any = {
      status: {
        in: ["Preparing", "Picked", "Out for Delivery"]
      }
    };

    if (deliveryBoyId) {
      whereClause.deliveryBoyId = deliveryBoyId;
    }

    const orders = await prisma.order.findMany({
      where: whereClause,
      include: {
        shop: true
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json([]);
  }
}
