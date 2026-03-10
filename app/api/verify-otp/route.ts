import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const mobile = String(body.mobile || "").trim();
    const otp = String(body.otp || "").trim();

    if (!/^\d{10}$/.test(mobile) || !/^\d{4,6}$/.test(otp)) {
      return NextResponse.json({ success: false, message: "Invalid request" }, { status: 400 });
    }

    const otpRow = await prisma.otpCode.findUnique({
      where: { mobile },
    });

    if (!otpRow) {
      return NextResponse.json({ success: false, message: "OTP not found" }, { status: 404 });
    }

    if (new Date() > otpRow.expiresAt) {
      return NextResponse.json({ success: false, message: "OTP expired" }, { status: 400 });
    }

    if (otpRow.otp !== otp) {
      return NextResponse.json({ success: false, message: "Invalid OTP" }, { status: 400 });
    }

    await prisma.otpCode.delete({
      where: { mobile },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
