export const dynamic = 'force-dynamic'
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(){

const customers = await prisma.customer.findMany({
orderBy:{ createdAt:"desc" }
});

const orders = await prisma.order.findMany();

const now = new Date();

const finalCustomers = customers.map((c:any)=>{

let displayStatus = "Trial Expired";

if(c.subscription && c.subscriptionEnd && new Date(c.subscriptionEnd) > now){
displayStatus = "Subscriber";
}else if(c.subscription && c.subscriptionEnd && new Date(c.subscriptionEnd) <= now){
displayStatus = "Expired";
}else if(c.trialEnd && new Date(c.trialEnd) > now){
displayStatus = "Trial Active";
}else{
displayStatus = "Trial Expired";
}

const orderCount = orders.filter((o:any)=>o.mobile===c.mobile).length;

return {
...c,
displayStatus,
orderCount
};

});

return NextResponse.json(finalCustomers);

}
