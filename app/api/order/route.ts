import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const order = await prisma.order.create({
      data: {
        name: body.name,
        mobile: body.mobile,
        address: body.address,
        product: body.product,
        quantity: body.quantity,
      },
    });

    return NextResponse.json({ success: true, order });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Order create failed" },
      { status: 500 }
    );
  }
}
