import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req:Request){

const body = await req.json();

await prisma.order.update({

where:{
id:body.id
},

data:{
status:"Delivered"
}

});

return NextResponse.json({success:true});

}
