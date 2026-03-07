import { PrismaClient } from "@prisma/client";
import crypto from "crypto";

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

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return Response.json({
        success: false,
        message: "Payment verification failed"
      });
    }

    await prisma.customer.update({
      where: { mobile },
      data: {
        subscription: true
      }
    });

    return Response.json({
      success: true,
      message: "Subscription activated successfully"
    });

  } catch (error) {
    return Response.json({
      success: false,
      message: "Something went wrong"
    });
  }
}
