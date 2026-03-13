"use client";

import { useEffect, useState } from "react";

export default function CustomerOrdersPage(){

const [orders,setOrders] = useState<any[]>([]);

useEffect(()=>{

const admin = localStorage.getItem("adminLogin");

if(!admin){
window.location.href="/admin/login";
return;
}

const url = new URL(window.location.href);
const mobile = url.searchParams.get("mobile");

if(mobile){
loadOrders(mobile);
}

},[]);

const loadOrders = async (mobile:string)=>{

const res = await fetch(`/api/customer-orders?mobile=${mobile}`);
const data = await res.json();
setOrders(data);

};

return(

<div style={{padding:30,fontFamily:"Arial"}}>

<h1>Customer Orders</h1>

<table style={{
width:"100%",
borderCollapse:"collapse",
marginTop:20
}}>

<thead>
<tr>
<th style={th}>Product</th>
<th style={th}>Qty</th>
<th style={th}>Payment</th>
<th style={th}>Status</th>
<th style={th}>Date</th>
</tr>
</thead>

<tbody>

{orders.map((o:any)=>(

<tr key={o.id}>
<td style={td}>{o.product}</td>
<td style={td}>{o.quantity}</td>
<td style={td}>{o.payment}</td>
<td style={td}>{o.status}</td>
<td style={td}>{new Date(o.createdAt).toLocaleString()}</td>
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
