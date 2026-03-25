import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const id = String(body.id || "");
    const deliveryStatus = String(body.deliveryStatus || "");
    const deliveryBoyId = String(body.deliveryBoyId || "");
    const deliveryBoyName = String(body.deliveryBoyName || "");

    if (!id || !deliveryStatus) {
      return NextResponse.json({
        success: false,
        message: "Missing fields"
      });
    }

    let finalStatus = "Pending";

    if (deliveryStatus === "Picked") {
      finalStatus = "Picked";
    }

    if (deliveryStatus === "Out for Delivery") {
      finalStatus = "Out for Delivery";
    }

    if (deliveryStatus === "Delivered") {
      finalStatus = "Delivered";
    }

    await prisma.order.update({
      where: { id },
      data: {
        deliveryStatus,
        deliveryBoyId: deliveryBoyId || null,
        deliveryBoyName: deliveryBoyName || null,
        status: finalStatus
      }
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Server error"
    });
  }
}
