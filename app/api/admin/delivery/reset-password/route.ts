import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const id = body.id;

    const user = await prisma.deliveryBoy.findUnique({
      where: { id }
    });

    if (!user) {
      return Response.json({
        success: false,
        message: "User not found"
      });
    }

    const rawPassword = user.mobile.slice(-4);
    const password = await bcrypt.hash(rawPassword, 10);

    await prisma.deliveryBoy.update({
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
