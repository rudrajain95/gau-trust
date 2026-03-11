import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req:Request){

const body = await req.json();

const { name,mobile,address } = body;

if(!name || !mobile){
return NextResponse.json({success:false,message:"Missing fields"});
}

const existing = await prisma.customer.findUnique({
where:{ mobile }
});

if(existing){
return NextResponse.json({
success:false,
message:"Mobile already registered. Please login."
});
}

await prisma.customer.create({
data:{
name,
mobile,
address
}
});

return NextResponse.json({success:true});

}
