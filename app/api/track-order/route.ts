import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { mobile } = body;

    if (!mobile) {
      return NextResponse.json({
        success: false,
        message: "Mobile number is required"
      });
    }

    const orders = await prisma.order.findMany({
      where: { mobile },
      orderBy: { createdAt: "desc" },
      take: 20
    });

    return NextResponse.json({
      success: true,
      orders
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Unable to fetch orders"
    });
  }
}
