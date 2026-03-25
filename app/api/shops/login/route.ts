import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const mobile = String(body.mobile || "").trim();
    const password = String(body.password || "").trim();

    if (!mobile || !password) {
      return NextResponse.json({
        success: false,
        message: "Mobile and password required"
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

    if (!shop.active) {
      return NextResponse.json({
        success: false,
        message: "Shop is disabled by admin"
      });
    }

    const isMatch = await bcrypt.compare(password, shop.password);

    if (!isMatch) {
      return NextResponse.json({
        success: false,
        message: "Invalid password"
      });
    }

    return NextResponse.json({
      success: true,
      shop: {
        id: shop.id,
        name: shop.name,
        mobile: shop.mobile
      }
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Server error"
    });
  }
}
