import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body.name || "").trim();
    const mobile = String(body.mobile || "").trim();
    const area = String(body.area || "").trim();

    if (!name || !mobile) {
      return Response.json({
        success: false,
        message: "Missing fields"
      });
    }

    const existing = await prisma.deliveryBoy.findUnique({
      where: { mobile }
    });

    if (existing) {
      return Response.json({
        success: false,
        message: "Mobile already exists"
      });
    }

    // password = last 4 digit
    const rawPassword = mobile.slice(-4);
    const password = await bcrypt.hash(rawPassword, 10);

    await prisma.deliveryBoy.create({
      data: {
        name,
        mobile,
        area,
        password
      }
    });

    return Response.json({
      success: true,
      defaultPassword: rawPassword
    });

  } catch (error) {
    return Response.json({
      success: false,
      message: "Server error"
    });
  }
}
