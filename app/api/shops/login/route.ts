export const dynamic = "force-dynamic";
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
        message: "Mobile and password required"
      });
    }

    const shop = await prisma.shop.findFirst({
      where: {
        mobile,
        password,
        active: true
      }
    });

    if (!shop) {
      return NextResponse.json({
        success: false,
        message: "Invalid mobile or password"
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
