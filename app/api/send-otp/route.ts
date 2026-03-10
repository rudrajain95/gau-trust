import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const mobile = String(body.mobile || "").trim();

    if (!/^\d{10}$/.test(mobile)) {
      return NextResponse.json({ success: false, message: "Invalid mobile number" }, { status: 400 });
    }

    const apiKey = process.env.FAST2SMS_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ success: false, message: "FAST2SMS_API_KEY missing in Render environment" }, { status: 500 });
    }

    const otp = generateOtp();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    await prisma.otpCode.upsert({
      where: { mobile },
      update: { otp, expiresAt },
      create: { mobile, otp, expiresAt },
    });

    const url =
      `https://www.fast2sms.com/dev/bulkV2` +
      `?authorization=${encodeURIComponent(apiKey)}` +
      `&variables_values=${encodeURIComponent(otp)}` +
      `&route=otp` +
      `&numbers=${encodeURIComponent(mobile)}`;

    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
    });

    const result = await response.json();

    if (!response.ok) {
      return NextResponse.json({
        success: false,
        message: "Fast2SMS request failed",
        provider: result,
      }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
