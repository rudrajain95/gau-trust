import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request){

const body = await req.json();
const { mobile } = body;

let customer = await prisma.customer.findUnique({
where:{ mobile }
});

if(!customer){

customer = await prisma.customer.create({
data:{
mobile,
name:"New Customer",
address:""
}
});

}

return NextResponse.json({
success:true
});

}
