import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const mobile = String(body.mobile || "");
    const password = String(body.password || "");

    const user = await prisma.deliveryBoy.findUnique({
      where: { mobile }
    });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User not found"
      });
    }

    if (!user.active) {
      return NextResponse.json({
        success: false,
        message: "Account disabled"
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return NextResponse.json({
        success: false,
        message: "Invalid password"
      });
    }

    return NextResponse.json({
      success: true,
      user
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Server error"
    });
  }
}
