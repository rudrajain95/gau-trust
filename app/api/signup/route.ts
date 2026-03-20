import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body.name || "").trim();
    const mobile = String(body.mobile || "").trim();
    const address = String(body.address || "").trim();

    if (!name || !mobile || !address) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    if (!/^\d{10}$/.test(mobile)) {
      return NextResponse.json(
        { success: false, message: "Enter valid mobile number" },
        { status: 400 }
      );
    }

    const existing = await prisma.customer.findUnique({
      where: { mobile },
    });

    if (existing) {
      return NextResponse.json({
        success: false,
        message: "Mobile already registered. Please login.",
      });
    }

    const now = new Date();
    const trialEnd = new Date(now);
    trialEnd.setDate(trialEnd.getDate() + 7);

    await prisma.customer.create({
      data: {
        name,
        mobile,
        address,
        trialStart: now,
        trialEnd,
      },
    });

    return NextResponse.json({ success: true, message: "Signup successful" });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
