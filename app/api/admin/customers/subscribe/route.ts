import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req:Request){

try{

const body = await req.json();

const mobile = String(body.mobile || "");
const months = Number(body.months || 1);

if(!mobile){
return NextResponse.json({
success:false,
message:"Mobile missing"
});
}

const start = new Date();
const end = new Date();

end.setMonth(end.getMonth() + months);

await prisma.customer.update({
where:{ mobile },
data:{
subscription:true,
subscriptionStart:start,
subscriptionEnd:end
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
