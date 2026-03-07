import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {

  const body = await req.json();
  const { mobile } = body;

  const customer = await prisma.customer.findUnique({
    where:{ mobile }
  });

  if(!customer){
    return NextResponse.json({
      trial:false,
      message:"New customer"
    });
  }

  const today = new Date();

  if(customer.trialEnd && today > customer.trialEnd && !customer.subscription){
    return NextResponse.json({
      expired:true
    });
  }

  const daysLeft = Math.ceil(
    (customer.trialEnd.getTime() - today.getTime()) /
    (1000*60*60*24)
  );

  return NextResponse.json({
    trial:true,
    daysLeft
  });

}
