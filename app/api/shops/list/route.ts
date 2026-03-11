import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {

  try {

    const shops = await prisma.shop.findMany({
      orderBy: { createdAt: "desc" }
    });

    return NextResponse.json(shops);

  } catch (error) {

    return NextResponse.json({
      success: false,
      message: "Server error"
    });

  }

}
