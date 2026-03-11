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

    if (!/^[0-9]{10}$/.test(mobile)) {
      return NextResponse.json({ success:false, message:"Invalid mobile number" });
    }

    const otp = generateOtp();

    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    await prisma.otpCode.upsert({
      where:{ mobile },
      update:{ otp, expiresAt },
      create:{ mobile, otp, expiresAt }
    });

    // TESTING MODE (SMS send नहीं होगा)
    return NextResponse.json({
      success:true,
      testingOtp: otp
    });

  } catch(error){
    return NextResponse.json({ success:false, message:"Server error" });
  }
}
