import { PrismaClient } from "@prisma/client";
import Razorpay from "razorpay";

const prisma = new PrismaClient();

export async function POST(req: Request) {

  const body = await req.json();

  const { name, mobile, address, product, quantity, payment } = body;

  let customer = await prisma.customer.findUnique({
    where: { mobile }
  });

  // FIRST ORDER → CREATE TRIAL
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

  const now = new Date();

  // TRIAL EXPIRED → NEED SUBSCRIPTION
  if (customer.trialEnd && now > customer.trialEnd && !customer.subscription) {

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const order = await razorpay.orders.create({
      amount: 19900,
      currency: "INR",
      receipt: "gau-trust-subscription"
    });

    return Response.json({
      success:false,
      subscriptionRequired:true,
      orderId:order.id,
      amount:order.amount
    });

  }

  // SUBSCRIPTION EXPIRED CHECK
  const today = new Date();

  if (
    customer.subscription &&
    customer.subscriptionEnd &&
    today > customer.subscriptionEnd
  ) {

    await prisma.customer.update({
      where: { mobile },
      data: {
        subscription: false
      }
    });

    return Response.json({
      success:false,
      message:"Subscription expired. Please subscribe again."
    });

  }

  // CREATE MILK ORDER
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

 const message = `
New Order - Gau Trust Milk

Name: ${name}
Mobile: ${mobile}
Address: ${address}
Product: ${product}
Quantity: ${quantity}
Payment: ${payment}
`;

const whatsappUrl =
`https://wa.me/917974940093?text=${encodeURIComponent(message)}`;

return Response.json({
  success: true,
  whatsappUrl
});
}
