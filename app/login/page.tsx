"use client";

import { useState } from "react";

export default function Login(){

const [mobile,setMobile]=useState("");

const login=()=>{

if(!mobile){

alert("Enter mobile number");

return;

}

localStorage.setItem("customerMobile",mobile);

window.location.href="/dashboard";

}

return(

<div style={{padding:40,fontFamily:"Arial"}}>

<h1>Customer Login</h1>

<input
placeholder="Enter Mobile Number"
value={mobile}
onChange={(e)=>setMobile(e.target.value)}
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
