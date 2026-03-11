"use client";

import { useEffect, useState } from "react";

export default function DeliveryPage(){

const [orders,setOrders] = useState<any[]>([]);

useEffect(()=>{

const admin = localStorage.getItem("adminLogin");

if(!admin){
window.location.href="/admin/login";
return;
}

loadOrders();

},[]);

const loadOrders = async()=>{

const res = await fetch("/api/admin/orders");

const data = await res.json();

setOrders(data);

};

return(

<div style={{padding:20,fontFamily:"Arial"}}>

<h1>Delivery Dashboard</h1>

<table style={{
width:"100%",
borderCollapse:"collapse",
marginTop:20
}}>

<thead>

<tr>

<th style={th}>Name</th>
<th style={th}>Product</th>
<th style={th}>Qty</th>
<th style={th}>Address</th>
<th style={th}>Status</th>

</tr>

</thead>

<tbody>

{orders.map((o:any)=>(

<tr key={o.id}>

<td style={td}>{o.name}</td>

<td style={td}>{o.product}</td>

<td style={td}>{o.quantity}</td>

<td style={td}>{o.address}</td>

<td style={td}>{o.status}</td>

</tr>

))}

</tbody>

</table>

</div>

)

}

const th={
border:"1px solid #ddd",
padding:8,
background:"#f5f5f5"
}

const td={
border:"1px solid #ddd",
padding:8
}
