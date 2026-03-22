"use client";

import { useEffect, useState } from "react";

export default function ShopOrdersPage(){

const [orders,setOrders]=useState<any[]>([]);

const shopId = typeof window !== "undefined"
? localStorage.getItem("shopId")
: null;

const loadOrders=async()=>{

const res = await fetch(`/api/shops/orders?shopId=${shopId}`);
const data = await res.json();

setOrders(data);

}

useEffect(()=>{

loadOrders();

const interval = setInterval(loadOrders,5000);

return ()=>clearInterval(interval);

},[]);

const updateStatus = async (id:string,status:string)=>{

await fetch("/api/shops/update-order",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
id,
status
})

});

loadOrders();

};

return(

<div style={{padding:30,fontFamily:"Arial"}}>

<h1>Shop Orders</h1>

<table style={{
width:"100%",
borderCollapse:"collapse",
marginTop:20
}}>

<thead>

<tr>

<th style={th}>Time</th>
<th style={th}>Customer</th>
<th style={th}>Mobile</th>
<th style={th}>Product</th>
<th style={th}>Qty</th>
<th style={th}>Address</th>
<th style={th}>Status</th>
<th style={th}>Action</th>

</tr>

</thead>

<tbody>

{orders.map((o)=>(
<tr key={o.id}>

<td style={td}>
{new Date(o.createdAt).toLocaleString()}
</td>

<td style={td}>{o.name}</td>

<td style={td}>
<a href={`tel:${o.mobile}`}>
{o.mobile}
</a>
</td>

<td style={td}>{o.product}</td>

<td style={td}>{o.quantity}</td>

<td style={td}>{o.address}</td>

<td style={td}>{o.shopStatus}</td>

<td style={td}>

<button
onClick={()=>updateStatus(o.id,"Accepted")}
style={acceptBtn}
>
Accept
</button>

<button
onClick={()=>updateStatus(o.id,"Cancelled")}
style={cancelBtn}
>
Cancel
</button>

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

const acceptBtn={
background:"green",
color:"white",
border:"none",
padding:"6px 10px",
marginRight:6
}

const cancelBtn={
background:"red",
color:"white",
border:"none",
padding:"6px 10px"
}
