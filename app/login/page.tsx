"use client";

import { useState } from "react";

export default function Login(){

const [mobile,setMobile]=useState("");
const [otp,setOtp]=useState("");
const [serverOtp,setServerOtp]=useState("");
const [step,setStep]=useState(1);

const sendOTP=async()=>{

const res=await fetch("/api/send-otp",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({mobile})
});

const data=await res.json();

if(data.success){

setServerOtp(data.otp);
setStep(2);

}

};

const verifyOTP=async()=>{

if(otp === serverOtp.toString()){

localStorage.setItem("customerMobile",mobile);

window.location.href="/dashboard";

}else{

alert("Invalid OTP");

}

};

return(

<div style={{
display:"flex",
justifyContent:"center",
alignItems:"center",
height:"100vh",
fontFamily:"Arial"
}}>

<div style={{
border:"1px solid #ddd",
padding:40,
borderRadius:10,
width:300
}}>

<h2>Customer Login</h2>

{step===1 && (

<>

<input
placeholder="Mobile"
value={mobile}
onChange={(e)=>setMobile(e.target.value)}
style={{padding:12,width:"100%",marginTop:20}}
/>

<button
onClick={sendOTP}
style={{
marginTop:20,
padding:12,
width:"100%",
background:"#1976d2",
color:"white",
border:"none"
}}
>
Send OTP
</button>

</>

)}

{step===2 && (

<>

<input
placeholder="Enter OTP"
value={otp}
onChange={(e)=>setOtp(e.target.value)}
style={{padding:12,width:"100%",marginTop:20}}
/>

<button
onClick={verifyOTP}
style={{
marginTop:20,
padding:12,
width:"100%",
background:"green",
color:"white",
border:"none"
}}
>
Verify OTP
</button>

</>

)}

</div>

</div>

)

}
