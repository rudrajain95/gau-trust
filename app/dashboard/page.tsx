"use client";

import { useEffect, useState } from "react";

export default function Dashboard(){

const [mobile,setMobile] = useState("");
const [customer,setCustomer] = useState<any>(null);

useEffect(()=>{

const savedMobile = localStorage.getItem("customerMobile");

if(!savedMobile){
window.location.href="/login";
return;
}

setMobile(savedMobile);

fetch(`/api/customer?mobile=${savedMobile}`)
.then(res=>res.json())
.then(data=>setCustomer(data));

},[]);

if(!customer){
return <p style={{padding:30}}>Loading...</p>;
}

return(

<div style={{
padding:30,
fontFamily:"Arial",
background:"#e3f2fd",
minHeight:"100vh"
}}>

<h1>Customer Dashboard</h1>

<div style={{
background:"white",
padding:20,
borderRadius:10,
marginTop:20,
boxShadow:"0 2px 8px rgba(0,0,0,0.1)"
}}>

<h2>{customer.name}</h2>

<p><b>Mobile:</b> {customer.mobile}</p>

<p><b>Address:</b> {customer.address}</p>

</div>

<div style={{
background:"white",
padding:20,
borderRadius:10,
marginTop:20,
boxShadow:"0 2px 8px rgba(0,0,0,0.1)"
}}>

<h2>Wallet Coins</h2>

<p style={{
fontSize:22,
fontWeight:"bold",
color:"#1976d2"
}}>

{customer.coins} Coins

</p>

<p style={{color:"#555"}}>
Earn coins on every order.  
100 coins = ₹10 discount.
</p>

</div>

<div style={{
background:"white",
padding:20,
borderRadius:10,
marginTop:20,
boxShadow:"0 2px 8px rgba(0,0,0,0.1)"
}}>

<h2>Trial Status</h2>

{customer.trialEnd ? (

<p>

Trial active until  
<b> {new Date(customer.trialEnd).toLocaleDateString()}</b>

</p>

):(

<p>No trial active</p>

)}

</div>

<div style={{
background:"white",
padding:20,
borderRadius:10,
marginTop:20,
boxShadow:"0 2px 8px rgba(0,0,0,0.1)"
}}>

<h2>Subscription</h2>

{customer.subscription ? (

<p style={{color:"green"}}>Active</p>

):( 

<div>

<p style={{color:"red"}}>Not Subscribed</p>

<a href="/subscribe">

<button style={{
padding:12,
background:"#1976d2",
color:"white",
border:"none",
borderRadius:6,
marginTop:10
}}>

Subscribe ₹199 / Month

</button>

</a>

</div>

)}

</div>

<div style={{marginTop:30}}>

 <a href="/profile">
<button
style={{
padding:10,
background:"#1976d2",
color:"white",
border:"none",
marginLeft:10
}}
>
Profile
</button>
</a> 
  
<a href="/orders">

<button style={{
padding:12,
background:"#1976d2",
color:"white",
border:"none",
borderRadius:6,
marginRight:10
}}>

My Orders

</button>

</a>

<a href="/order">

<button style={{
padding:12,
background:"#1976d2",
color:"white",
border:"none",
borderRadius:6
}}>

Place New Order

</button>

</a>

</div>

</div>

);
}
