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

const interval=setInterval(loadOrders,5000);

return ()=>clearInterval(interval);

},[])

return(

<div style={{padding:30,fontFamily:"Arial"}}>

<h1>Order History</h1>

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

<th style={th}>Product</th>
<th style={th}>Quantity</th>
<th style={th}>Shop</th>
<th style={th}>Shop Phone</th>
<th style={th}>Delivery Boy</th>
<th style={th}>Status</th>
<th style={th}>Date</th>

</tr>

</thead>

<tbody>

{orders.map((o)=>(
<tr key={o.id}>

<td style={td}>{o.product}</td>

<td style={td}>{o.quantity}</td>

<td style={td}>{o.shop?.name}</td>

<td style={td}>
<a href={`tel:${o.shop?.mobile}`}>
{o.shop?.mobile}
</a>
</td>

<td style={td}>
{o.deliveryBoy ? (
<a href={`tel:${o.deliveryBoy}`}>
{o.deliveryBoy}
</a>
):"-"}
</td>

<td style={td}>{o.status}</td>

<td style={td}>
{new Date(o.createdAt).toLocaleString()}
</td>

</tr>
))}

</tbody>

</table>

</div>

)

}

const th={
border:"1px solid #ddd",
padding:10,
background:"#f5f5f5"
}

const td={
border:"1px solid #ddd",
padding:8
}
