import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req:Request){

try{

const body = await req.json();

const name = String(body.name || "").trim();
const price = Number(body.price || 0);
const unit = String(body.unit || "").trim();

if(!name || !price || !unit){
return NextResponse.json({
success:false,
message:"Missing fields"
});
}

await prisma.product.create({
data:{
name,
price,
unit
}
});

return NextResponse.json({success:true});

}catch(error){

return NextResponse.json({
success:false,
message:"Server error"
});

}

}
