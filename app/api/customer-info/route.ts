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
      success:false,
      message:"Customer not found"
    });
  }

  const orders = await prisma.order.findMany({
    where:{ mobile },
    orderBy:{ createdAt:"desc" }
  });

  const today = new Date();

  let trialDays = 0;

  if(customer.trialEnd){
    trialDays = Math.ceil(
      (customer.trialEnd.getTime() - today.getTime()) /
      (1000*60*60*24)
    );
  }

  let subscriptionDays = 0;

  if(customer.subscriptionEnd){
    subscriptionDays = Math.ceil(
      (customer.subscriptionEnd.getTime() - today.getTime()) /
      (1000*60*60*24)
    );
  }

  return NextResponse.json({
    success:true,
    customer,
    trialDays,
    subscriptionDays,
    orders
  });

}
