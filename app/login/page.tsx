"use client";

import { useState } from "react";

export default function CustomerLogin(){

const [mobile,setMobile] = useState("");

const login = ()=>{

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
style={{
display:"block",
marginTop:20,
padding:12,
width:250
}}
/>

<button
onClick={login}
style={{
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
