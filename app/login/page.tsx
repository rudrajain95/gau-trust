"use client";

import { useState } from "react";

export default function Login(){

const [mobile,setMobile]=useState("");

const sendOTP=async()=>{

if(mobile.length!=10){
alert("Enter valid mobile number");
return;
}

const res=await fetch("/api/customer-info",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({mobile})
});

const data=await res.json();

if(data.success){

localStorage.setItem("customerMobile",mobile);

window.location.href="/dashboard";

}

};

return(

<div style={{
display:"flex",
justifyContent:"center",
alignItems:"center",
height:"100vh",
fontFamily:"Arial"
}}><div style={{
border:"1px solid #ddd",
padding:40,
borderRadius:10,
width:300,
textAlign:"center"
}}><h2>Customer Login</h2><input
placeholder="Mobile Number"
value={mobile}
onChange={(e)=>setMobile(e.target.value)}
style={{
marginTop:20,
padding:12,
width:"100%"
}}
/>

<button
onClick={sendOTP}
style={{
marginTop:20,
padding:12,
width:"100%",
background:"#1976d2",
color:"white",
border:"none",
borderRadius:6
}}

«»

Continue
</button>

</div></div>)

}
