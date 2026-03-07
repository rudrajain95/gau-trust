import Razorpay from "razorpay";
import { NextResponse } from "next/server";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST() {

  const order = await razorpay.orders.create({
    amount: 19900, // ₹199
    currency: "INR",
    receipt: "gautrust_subscription",
  });

  return NextResponse.json(order);
}
