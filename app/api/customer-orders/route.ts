import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request){

const { searchParams } = new URL(req.url);

const mobile = searchParams.get("mobile");

if(!mobile){

return NextResponse.json([]);

}

const orders = await prisma.order.findMany({

where:{
mobile:mobile
},

orderBy:{
createdAt:"desc"
}

});

return NextResponse.json(orders);

}
