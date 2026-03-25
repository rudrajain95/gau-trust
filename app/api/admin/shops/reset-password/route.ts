import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const id = body.id;

    const shop = await prisma.shop.findUnique({
      where: { id }
    });

    if (!shop) {
      return Response.json({
        success: false,
        message: "Shop not found"
      });
    }

    const rawPassword = shop.mobile.slice(-4);
    const password = await bcrypt.hash(rawPassword, 10);

    await prisma.shop.update({
      where: { id },
      data: { password }
    });

    return Response.json({
      success: true,
      newPassword: rawPassword
    });

  } catch (error) {
    return Response.json({
      success: false,
      message: "Error"
    });
  }
}
