import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request){

const { searchParams } = new URL(req.url);

const mobile = searchParams.get("mobile");

if(!mobile){
return NextResponse.json(null);
}

const customer = await prisma.customer.findUnique({
where:{ mobile }
});

return NextResponse.json(customer);

}
