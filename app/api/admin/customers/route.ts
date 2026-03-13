import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(){

const customers = await prisma.customer.findMany({

orderBy:{
createdAt:"desc"
}

});

return NextResponse.json(customers);

}
