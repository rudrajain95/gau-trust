import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const id = String(body.id || "");
    const shopStatus = String(body.shopStatus || "");

    if (!id || !shopStatus) {
      return NextResponse.json({
        success: false,
        message: "Missing fields"
      });
    }

    let finalStatus = "Pending";

    if (shopStatus === "Accepted") {
      finalStatus = "Accepted";
    }

    if (shopStatus === "Rejected") {
      finalStatus = "Cancelled";
    }

    if (shopStatus === "Preparing") {
      finalStatus = "Preparing";
    }

    if (shopStatus === "Ready") {
      finalStatus = "Ready for Pickup";
    }

    await prisma.order.update({
      where: { id },
      data: {
        shopStatus,
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
