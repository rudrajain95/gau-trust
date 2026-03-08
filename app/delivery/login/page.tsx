"use client";

import { useState } from "react";

export default function DeliveryLogin(){

const [password,setPassword]=useState("");

const login=()=>{

if(password==="delivery123"){

localStorage.setItem("deliveryLogin","true");

window.location.href="/delivery/dashboard";

}else{

alert("Wrong password");

}

}

return(

<div style={{padding:40,fontFamily:"Arial"}}>

<h1>Delivery Boy Login</h1>

<input
type="password"
placeholder="Enter password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
style={{padding:12,width:300}}
/>

<button
onClick={login}
style={{
display:"block",
marginTop:20,
padding:12,
background:"#2196f3",
color:"white",
border:"none"
}}
>

Login

</button>

</div>

)

}
