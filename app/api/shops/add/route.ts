import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body.name || "").trim();
    const ownerName = String(body.ownerName || "").trim();
    const mobile = String(body.mobile || "").trim();
    const address = String(body.address || "").trim();
    const area = String(body.area || "").trim();

    if (!name || !mobile || !address) {
      return NextResponse.json({
        success: false,
        message: "Missing required fields"
      });
    }

    const existing = await prisma.shop.findUnique({
      where: { mobile }
    });

    if (existing) {
      return NextResponse.json({
        success: false,
        message: "Shop mobile already exists"
      });
    }

    await prisma.shop.create({
      data: {
        name,
        ownerName,
        mobile,
        address,
        area
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
