import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {

  const body = await req.json();

  const { name, mobile, address, product, quantity, payment } = body;

  // check customer
  let customer = await prisma.customer.findUnique({
    where: { mobile }
  });

  // create trial user
  if (!customer) {

    const today = new Date();
    const trialEnd = new Date();
    trialEnd.setDate(today.getDate() + 7);

    customer = await prisma.customer.create({
      data:{
        name,
        mobile,
        address,
        trialStart: today,
        trialEnd: trialEnd
      }
    });

  }

  // trial check
  const now = new Date();

  if (customer.trialEnd && now > customer.trialEnd && !customer.subscription) {

    return NextResponse.json({
      success:false,
      message:"Trial expired. Please subscribe ₹199/month."
    });

  }

  // create order
  await prisma.order.create({
    data:{
      name,
      mobile,
      address,
      product,
      quantity,
      payment
    }
  });

  // SEND WHATSAPP MESSAGE

  const message =
`🚨 New Order

Name: ${name}
Mobile: ${mobile}
Product: ${product}
Qty: ${quantity}
Address: ${address}
Payment: ${payment}`;


  await fetch("https://api.ultramsg.com/instance164454/messages/chat", {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      token:"la7wlczxltgt3wtx",
      to:"917974940093",
      body:message
    })
  });

  return NextResponse.json({
    success:true
  });

}
