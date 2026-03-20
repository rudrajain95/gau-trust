export const dynamic = 'force-dynamic'
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {

  const orders = await prisma.order.findMany({
    where:{
      status:{
        in:["Preparing","Picked","Out for Delivery"]
      }
    },
    include:{
      shop:true
    },
    orderBy:{
      createdAt:"desc"
    }
  });

  return NextResponse.json(orders);

}
