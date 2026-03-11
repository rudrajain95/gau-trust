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

    await prisma.otpCode.upsert({
      where:{ mobile },
      update:{ otp },
      create:{ mobile, otp }
    });

    const authKey = process.env.MSG91_AUTH_KEY;

    const url =
    `https://control.msg91.com/api/v5/otp?template_id=YOUR_TEMPLATE_ID&mobile=91${mobile}&authkey=${authKey}&otp=${otp}`;

    const response = await fetch(url,{ method:"GET" });

    if(!response.ok){
      return NextResponse.json({ success:false, message:"MSG91 OTP failed" });
    }

    return NextResponse.json({ success:true });

  } catch(error){
    return NextResponse.json({ success:false, message:"Server error" });
  }
}
