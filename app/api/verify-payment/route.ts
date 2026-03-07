import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      mobile
    } = body;

    if (!mobile) {
      return NextResponse.json({
        success: false,
        message: "Mobile number missing"
      });
    }

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return NextResponse.json({
        success: false,
        message: "Payment verification failed"
      });
    }

    const today = new Date();
    const endDate = new Date();
    endDate.setDate(today.getDate() + 30);

    await prisma.customer.update({
      where: { mobile },
      data: {
        subscription: true,
        subscriptionStart: today,
        subscriptionEnd: endDate
      }
    });

    return NextResponse.json({
      success: true,
      message: "Subscription activated successfully"
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong"
    });
  }
}
