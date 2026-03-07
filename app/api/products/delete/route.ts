import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { id } = body;

    await prisma.product.delete({
      where: { id }
    });

    return Response.json({
      success: true
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: "Delete failed"
    });
  }
}
