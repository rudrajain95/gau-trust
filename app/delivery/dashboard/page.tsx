"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function DeliveryDashboard(){

const [orders,setOrders]=useState<any[]>([]);

useEffect(()=>{

fetch("/api/orders")
.then(res=>res.json())
.then(data=>setOrders(data))

},[])

useEffect(()=>{

if(typeof window === "undefined") return;

if(!(window as any).google) return;

const map = new (window as any).google.maps.Map(
document.getElementById("map"),
{
center:{lat:23.8343,lng:79.4423},
zoom:12
}
);

orders.forEach((o:any)=>{

new (window as any).google.maps.Marker({
position:{lat:23.8343,lng:79.4423},
map,
title:o.name
});

});

},[orders])

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

<h1>Delivery Dashboard</h1>

{/* Google Map */}

<div style={{marginBottom:30}}>

<h2>Delivery Map</h2>

<div
id="map"
style={{
height:"400px",
width:"100%",
border:"1px solid #ddd",
borderRadius:10
}}
></div>

</div>

{/* Orders Table */}

<h2>Delivery Orders</h2>

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
border:"none",
borderRadius:5
}}
>

Delivered

</button>

</td>

</tr>
))}

</tbody>

</table>

<Script
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCOo97LFjfHXwXayO_rHFttMUwewopv_A0"
strategy="afterInteractive"
/>

</div>

)

}
