import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const mobile = String(body.mobile || "").trim();
    const password = String(body.password || "").trim();

    if (!mobile || !password) {
      return NextResponse.json({
        success: false,
        message: "Missing fields"
      });
    }

    const shop = await prisma.shop.findUnique({
      where: { mobile }
    });

    if (!shop) {
      return NextResponse.json({
        success: false,
        message: "Shop not found"
      });
    }

    if (shop.password !== password) {
      return NextResponse.json({
        success: false,
        message: "Wrong password"
      });
    }

    return NextResponse.json({
      success: true,
      shop
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Server error"
    });
  }
}
