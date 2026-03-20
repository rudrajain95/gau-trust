export const dynamic = 'force-dynamic'
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(){

  const shops = await prisma.shop.findMany({
    where:{
      active:true
    },
    orderBy:{
      createdAt:"desc"
    }
  });

  return NextResponse.json(shops);

}
