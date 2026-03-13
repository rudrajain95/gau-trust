"use client";

import { useEffect, useState } from "react";

export default function OrdersPage(){

const [orders,setOrders] = useState<any[]>([]);

useEffect(()=>{

const mobile = localStorage.getItem("customerMobile");

if(!mobile){
window.location.href="/login";
return;
}

const loadOrders = ()=>{
fetch(`/api/customer-orders?mobile=${mobile}`)
.then(res=>res.json())
.then(data=>setOrders(data));
};

loadOrders();

const interval = setInterval(loadOrders,5000);

return ()=>clearInterval(interval);

},[]);

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
<th style={th}>Product</th>
<th style={th}>Quantity</th>
<th style={th}>Payment</th>
<th style={th}>Shop Status</th>
<th style={th}>Delivery Status</th>
<th style={th}>Date</th>
</tr>
</thead>

<tbody>

{orders.map((o:any)=>(

<tr key={o.id}>

<td style={td}>{o.product}</td>
<td style={td}>{o.quantity}</td>
<td style={td}>{o.payment}</td>

<td style={td}>
{o.shopStatus==="Pending" && "🟡 Order Received"}
{o.shopStatus==="Accepted" && "🟢 Shop Accepted"}
{o.shopStatus==="Rejected" && "🔴 Shop Rejected"}
{o.shopStatus==="Preparing" && "🟠 Preparing"}
{o.shopStatus==="Ready" && "📦 Ready for Pickup"}
</td>

<td style={td}>
{o.deliveryStatus==="Pending" && "⏳ Waiting for Delivery Boy"}
{o.deliveryStatus==="Picked" && "📦 Picked by Delivery Boy"}
{o.deliveryStatus==="Out for Delivery" && "🚚 Out for Delivery"}
{o.deliveryStatus==="Delivered" && "✅ Delivered"}
</td>

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

const th = {
border:"1px solid #ddd",
padding:10,
background:"#f5f5f5"
};

const td = {
border:"1px solid #ddd",
padding:10
};
