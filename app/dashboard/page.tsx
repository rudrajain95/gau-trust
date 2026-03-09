"use client";

import { useEffect, useState } from "react";

export default function Dashboard(){

const [mobile,setMobile]=useState("");

useEffect(()=>{

const savedMobile = localStorage.getItem("customerMobile");

if(!savedMobile){
window.location.href="/login";
return;
}

setMobile(savedMobile);

},[]);

return(

<div style={{padding:30,fontFamily:"Arial"}}><h1>Customer Dashboard</h1><p>Logged in as: {mobile}</p><div style={{marginTop:30}}><a href="/order">
<button style={{
padding:12,
marginRight:10,
background:"#1976d2",
color:"white",
border:"none",
borderRadius:6
}}>
Order
</button>
</a><a href="/orders">
<button style={{
padding:12,
marginRight:10,
background:"#444",
color:"white",
border:"none",
borderRadius:6
}}>
My Orders
</button>
</a><a href="/profile">
<button style={{
padding:12,
background:"#555",
color:"white",
border:"none",
borderRadius:6
}}>
Profile
</button>
</a></div><button
onClick={()=>{
localStorage.removeItem("customerMobile");
window.location.href="/";
}}
style={{
marginTop:40,
padding:10,
background:"red",
color:"white",
border:"none"
}}

«»

Logout
</button>

</div>)

}
