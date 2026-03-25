import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const orderId = String(body.orderId || "");
    const deliveryBoyId = String(body.deliveryBoyId || "");
    const deliveryBoyName = String(body.deliveryBoyName || "");

    if (!orderId || !deliveryBoyId) {
      return NextResponse.json({
        success: false,
        message: "Missing fields"
      });
    }

    await prisma.order.update({
      where: { id: orderId },
      data: {
        deliveryBoyId,
        deliveryBoyName,
        deliveryStatus: "Assigned",
        status: "Preparing"
      }
    });

    return NextResponse.json({
      success: true
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Server error"
    });
  }
}
