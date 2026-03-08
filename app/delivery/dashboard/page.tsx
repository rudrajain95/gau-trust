"use client";

import { useEffect, useState } from "react";

export default function DeliveryDashboard(){

const [orders,setOrders]=useState<any[]>([]);

useEffect(()=>{

fetch("/api/orders")
.then(res=>res.json())
.then(data=>setOrders(data))

},[])

const markDelivered=async(id:string)=>{

await fetch("/api/deliver",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({id})
});

alert("Marked Delivered");

window.location.reload();

}

return(

<div style={{padding:30,fontFamily:"Arial"}}>

<h1>Delivery Orders</h1>

<table style={{borderCollapse:"collapse",width:"100%"}}>

<thead>

<tr>

<th style={{border:"1px solid #ddd",padding:10}}>Name</th>
<th style={{border:"1px solid #ddd",padding:10}}>Product</th>
<th style={{border:"1px solid #ddd",padding:10}}>Address</th>
<th style={{border:"1px solid #ddd",padding:10}}>Action</th>

</tr>

</thead>

<tbody>

{orders.map((o)=>(
<tr key={o.id}>

<td style={{border:"1px solid #ddd",padding:10}}>
{o.name}
</td>

<td style={{border:"1px solid #ddd",padding:10}}>
{o.product}
</td>

<td style={{border:"1px solid #ddd",padding:10}}>
{o.address}
</td>

<td style={{border:"1px solid #ddd",padding:10}}>

<button
onClick={()=>markDelivered(o.id)}
style={{
padding:8,
background:"green",
color:"white",
border:"none"
}}
>

Delivered

</button>

</td>

</tr>
))}

</tbody>

</table>

</div>

)

}
