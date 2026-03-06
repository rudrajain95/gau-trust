import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {

  const body = await req.json();

  const { name, mobile, address, product, quantity, payment } = body;

  // check customer exists
  let customer = await prisma.customer.findUnique({
    where: { mobile }
  });

  // if first order → create trial customer
  if (!customer) {

    const today = new Date();

    const trialEnd = new Date();
    trialEnd.setDate(today.getDate() + 7);

    customer = await prisma.customer.create({
      data: {
        name,
        mobile,
        address,
        trialStart: today,
        trialEnd: trialEnd
      }
    });

  }

  // create order
  await prisma.order.create({
    data: {
      name,
      mobile,
      address,
      product,
      quantity,
      payment
    }
  });

  return Response.json({
    success: true
  });

}
