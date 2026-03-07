import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const products = await prisma.product.findMany({
    where: { active: true },
    orderBy: {
      createdAt: "asc"
    }
  });

  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const body = await req.json();

  const product = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
      unit: body.unit
    }
  });

  return NextResponse.json(product);
}
