import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req:Request){

try{

const body = await req.json();

const mobile = String(body.mobile || "");
const coins = Number(body.coins || 0);

if(!mobile || !coins){
return NextResponse.json({
success:false,
message:"Missing fields"
});
}

await prisma.customer.update({
where:{ mobile },
data:{
coins:{
increment:coins
}
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
