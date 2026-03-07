import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { id, name, price, unit, active } = body;

    const product = await prisma.product.update({
      where: { id },
      data: {
        name,
        price: parseFloat(price),
        unit,
        active
      }
    });

    return Response.json({
      success: true,
      product
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: "Product update failed"
    });
  }
}
