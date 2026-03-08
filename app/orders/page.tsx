"use client";

import { useEffect, useState } from "react";

export default function OrdersPage(){

const [orders,setOrders]=useState<any[]>([]);

useEffect(()=>{

const mobile = localStorage.getItem("customerMobile");

const loadOrders=()=>{

fetch(`/api/customer-orders?mobile=${mobile}`)
.then(res=>res.json())
.then(data=>setOrders(data))

}

loadOrders();

// auto refresh every 5 seconds
const interval=setInterval(loadOrders,5000);

return ()=>clearInterval(interval);

},[])

return(

<div style={{padding:30,fontFamily:"Arial"}}>

<h1>My Orders</h1>

{orders.length===0 && (
<p>No orders yet</p>
)}

<table style={{
marginTop:20,
borderCollapse:"collapse",
width:"100%"
}}>

<thead>

<tr>

<th style={{border:"1px solid #ddd",padding:10}}>Product</th>
<th style={{border:"1px solid #ddd",padding:10}}>Quantity</th>
<th style={{border:"1px solid #ddd",padding:10}}>Payment</th>
<th style={{border:"1px solid #ddd",padding:10}}>Status</th>
<th style={{border:"1px solid #ddd",padding:10}}>Date</th>

</tr>

</thead>

<tbody>

{orders.map((o)=>(
<tr key={o.id}>

<td style={{border:"1px solid #ddd",padding:10}}>
{o.product}
</td>

<td style={{border:"1px solid #ddd",padding:10}}>
{o.quantity}
</td>

<td style={{border:"1px solid #ddd",padding:10}}>
{o.payment}
</td>

<td style={{border:"1px solid #ddd",padding:10}}>

{o.status==="Pending" && "🟡 Order Received"}

{o.status==="Preparing" && "🟠 Preparing"}

{o.status==="Out for Delivery" && "🚚 Out for Delivery"}

{o.status==="Delivered" && "🟢 Delivered"}

{o.status==="Cancelled" && "🔴 Cancelled"}
</td>

<td style={{border:"1px solid #ddd",padding:10}}>
{new Date(o.createdAt).toLocaleString()}
</td>

</tr>
))}

</tbody>

</table>

</div>

)

}
