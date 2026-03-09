import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function AdminDashboard(){

const today = new Date();

today.setHours(0,0,0,0);

const ordersToday = await prisma.order.count({
where:{
createdAt:{
gte:today
}
}
});

const totalOrders = await prisma.order.count();

const customers = await prisma.customer.count();

const pendingDelivery = await prisma.order.count({
where:{
status:{
in:["Pending","Preparing","Out for Delivery"]
}
}
});

const subscribers = await prisma.customer.count({
where:{
subscription:true
}
});

return(

<div style={{padding:30,fontFamily:"Arial"}}>

<h1>Admin Business Dashboard</h1>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(2,1fr)",
gap:20,
marginTop:30
}}>

<div style={{padding:20,background:"#e3f2fd",borderRadius:10}}>
<h2>Today Orders</h2>
<p style={{fontSize:30}}>{ordersToday}</p>
</div>

<div style={{padding:20,background:"#e8f5e9",borderRadius:10}}>
<h2>Total Orders</h2>
<p style={{fontSize:30}}>{totalOrders}</p>
</div>

<div style={{padding:20,background:"#fff3e0",borderRadius:10}}>
<h2>Total Customers</h2>
<p style={{fontSize:30}}>{customers}</p>
</div>

<div style={{padding:20,background:"#fce4ec",borderRadius:10}}>
<h2>Active Subscribers</h2>
<p style={{fontSize:30}}>{subscribers}</p>
</div>

<div style={{padding:20,background:"#ffebee",borderRadius:10}}>
<h2>Pending Deliveries</h2>
<p style={{fontSize:30}}>{pendingDelivery}</p>
</div>

</div>

</div>

)

}
