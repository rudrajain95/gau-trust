import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const username = body.username;
    const password = body.password;

    const admin = await prisma.admin.findUnique({
      where: { username }
    });

    if (!admin) {
      return Response.json({ success: false, message: "Admin not found" });
    }

    if (!admin.active) {
      return Response.json({ success: false, message: "Admin disabled" });
    }

    const match = await bcrypt.compare(password, admin.password);

    if (!match) {
      return Response.json({ success: false, message: "Wrong password" });
    }

    return Response.json({
      success: true,
      admin: {
        id: admin.id,
        name: admin.name
      }
    });

  } catch (error) {
    return Response.json({
      success: false,
      message: "Server error"
    });
  }
}
