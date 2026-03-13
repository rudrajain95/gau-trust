import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req:Request){

const body = await req.json();

const mobile = String(body.mobile || "");

const start = new Date();

const end = new Date();

end.setMonth(end.getMonth()+1);

await prisma.customer.update({

where:{ mobile },

data:{
subscription:true,
subscriptionStart:start,
subscriptionEnd:end
}

});

return NextResponse.json({success:true});

}
