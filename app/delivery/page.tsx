"use client";

import { useEffect, useState } from "react";

export default function DeliveryPage(){

const [orders,setOrders]=useState([]);

const loadOrders = async ()=>{

const res = await fetch("/api/delivery/orders");

const data = await res.json();

setOrders(data);

};

useEffect(()=>{

loadOrders();

const interval = setInterval(loadOrders,5000);

return ()=>clearInterval(interval);

},[]);


const updateStatus = async (id:string,status:string)=>{

await fetch("/api/delivery/update-status",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
id,
deliveryStatus:status
})

});

loadOrders();

};


return(

<div style={{padding:30,fontFamily:"Arial"}}>

<h1>Delivery Orders</h1>

{orders.map((o:any)=>(

<div key={o.id}
style={{
border:"1px solid #ddd",
padding:20,
marginBottom:20,
borderRadius:8
}}>

<h3>{o.product}</h3>

<p><b>Customer:</b> {o.name}</p>

<p><b>Phone:</b> {o.mobile}</p>

<p><b>Address:</b> {o.address}</p>

<a href={`tel:${o.mobile}`}>

<button style={{marginRight:10}}>
Call Customer
</button>

</a>

<a
href={`https://www.google.com/maps/search/?api=1&query=${o.address}`}
target="_blank"
>

<button style={{marginRight:10}}>
Open Map
</button>

</a>


<br/><br/>

<button
onClick={()=>updateStatus(o.id,"Picked")}
style={{marginRight:10}}
>
Pickup
</button>

<button
onClick={()=>updateStatus(o.id,"Out for Delivery")}
style={{marginRight:10}}
>
Out for Delivery
</button>

<button
onClick={()=>updateStatus(o.id,"Delivered")}
>
Delivered
</button>

</div>

))}

</div>

);

}
