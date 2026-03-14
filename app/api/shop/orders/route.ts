import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req:Request){

const {searchParams}=new URL(req.url);

const shopId = searchParams.get("shopId");

if(!shopId){
return NextResponse.json([]);
}

const orders = await prisma.order.findMany({

where:{
shopId
},

orderBy:{
createdAt:"desc"
}

});

return NextResponse.json(orders);

}
