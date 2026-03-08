import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {

  const body = await req.json();

  const { name, mobile, address, product, quantity, payment } = body;

  // CHECK CUSTOMER
  let customer = await prisma.customer.findUnique({
    where: { mobile }
  });

  // CREATE TRIAL USER
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

  // TRIAL CHECK
  const now = new Date();

  if (customer.trialEnd && now > customer.trialEnd && !customer.subscription) {

    return NextResponse.json({
      success:false,
      message:"Trial expired. Please subscribe ₹199/month."
    });

  }

  // DELIVERY CHARGE LOGIC
  let deliveryCharge = 0;

  if(product !== "Milk"){
    deliveryCharge = 20;
  }

  // CREATE ORDER
  await prisma.order.create({
    data:{
      name,
      mobile,
      address,
      product,
      quantity,
      payment,
      deliveryCharge
    }
  });

  // ADD COINS TO CUSTOMER WALLET
  await prisma.customer.update({
    where:{ mobile },
    data:{
      coins:{
        increment:5
      }
    }
  });

  // WHATSAPP MESSAGE TEXT
  const message =
`🚨 New Order - Gau Trust Milk

Name: ${name}
Mobile: ${mobile}
Product: ${product}
Quantity: ${quantity}
Delivery Charge: ₹${deliveryCharge}
Address: ${address}
Payment: ${payment}
`;

  // SEND WHATSAPP ALERT
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
