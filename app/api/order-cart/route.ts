import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma=new PrismaClient();

export async function POST(req:Request){

const body=await req.json()

const {name,mobile,address,shopId,items}=body

for(const item of items){

await prisma.order.create({

data:{
name,
mobile,
address,
product:item.name,
quantity:String(item.quantity),
shopId,
payment:"COD"
}

})

}

return NextResponse.json({
success:true
})

}
