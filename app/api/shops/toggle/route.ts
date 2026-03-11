import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const id = String(body.id || "");
    const active = Boolean(body.active);

    await prisma.shop.update({
      where: { id },
      data: { active }
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Server error"
    });
  }
}
