import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req:Request){

const body = await req.json();

const {id,status}=body;

let finalStatus="Pending";

if(status==="Accepted"){
finalStatus="Preparing";
}

if(status==="Cancelled"){
finalStatus="Cancelled";
}

await prisma.order.update({

where:{id},

data:{
shopStatus:status,
status:finalStatus
}

});

return NextResponse.json({
success:true
});

}
