import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {

  const body = await req.json();

  const { name, mobile, address, product, quantity, payment } = body;

  // check customer
  let customer = await prisma.customer.findUnique({
    where: { mobile }
  });

  // if first order create trial
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

  // trial expiry check
  const now = new Date();

  if (customer.trialEnd && now > customer.trialEnd && !customer.subscription) {

    return Response.json({
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

  return Response.json({
    success:true
  });

}
