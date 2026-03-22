export const dynamic = "force-dynamic";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const id = String(body.id || "");
    const status = String(body.status || "");

    if (!id || !status) {
      return NextResponse.json({
        success: false,
        message: "Missing fields"
      });
    }

    let finalStatus = "Pending";

    if (status === "Accepted") {
      finalStatus = "Preparing";
    }

    if (status === "Cancelled") {
      finalStatus = "Cancelled";
    }

    await prisma.order.update({
      where: { id },
      data: {
        shopStatus: status,
        status: finalStatus
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
