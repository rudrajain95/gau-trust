"use client";

import { useState, useEffect } from "react";

export default function Dashboard(){

const [mobile,setMobile] = useState("");
const [data,setData] = useState<any>(null);

useEffect(()=>{

const savedMobile = localStorage.getItem("customerMobile");

if(savedMobile){
setMobile(savedMobile);
}

},[])

const loadDashboard = async ()=>{

if(!mobile){
alert("Enter mobile number");
return;
}

const res = await fetch("/api/customer-info",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({mobile})
});

const result = await res.json();

if(result.success){
setData(result);
}else{
alert(result.message);
}

};

return(

<div style={{padding:30,fontFamily:"Arial"}}>

<h1>Customer Dashboard</h1>

<input
placeholder="Enter Mobile Number"
value={mobile}
onChange={(e)=>setMobile(e.target.value)}
style={{padding:10,width:250}}
/>

<button
onClick={loadDashboard}
style={{
marginLeft:10,
padding:10,
background:"green",
color:"white",
border:"none"
}}
>
View Dashboard
</button>

{data && (

<div style={{marginTop:30}}>

<h2>Customer Info</h2>

<p>Name: {data.customer.name}</p>
<p>Mobile: {data.customer.mobile}</p>

<p>Trial Days Left: {data.trialDays}</p>

<p>Subscription Days Left: {data.subscriptionDays}</p>

<h2>Orders</h2>

<table border={1} cellPadding={10}>

<thead>
<tr>
<th>Product</th>
<th>Qty</th>
<th>Status</th>
<th>Date</th>
</tr>
</thead>

<tbody>

{data.orders.map((o:any)=>(
<tr key={o.id}>
<td>{o.product}</td>
<td>{o.quantity}</td>
<td>{o.status}</td>
<td>{new Date(o.createdAt).toLocaleString()}</td>
</tr>
))}

</tbody>

</table>

</div>

)}

</div>

);

}
