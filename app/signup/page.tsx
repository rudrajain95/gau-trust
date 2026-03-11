"use client";

import { useState } from "react";

export default function SignupPage(){

const [name,setName]=useState("");
const [mobile,setMobile]=useState("");
const [address,setAddress]=useState("");

const register = async () => {

if(mobile.length !== 10){
alert("Enter valid mobile number");
return;
}

const res = await fetch("/api/signup",{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify({ name,mobile,address })
});

const data = await res.json();

if(data.success){
alert("Signup successful. Now login.");
window.location.href="/login";
}else{
alert(data.message);
}

};

return(

<div style={{
display:"flex",
justifyContent:"center",
alignItems:"center",
height:"100vh"
}}>

<div style={{
border:"1px solid #ddd",
padding:40,
borderRadius:10,
width:320
}}>

<h2>Customer Signup</h2>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
style={{padding:10,width:"100%",marginTop:20}}
/>

<input
placeholder="Mobile"
value={mobile}
onChange={(e)=>setMobile(e.target.value)}
style={{padding:10,width:"100%",marginTop:20}}
/>

<input
placeholder="Address"
value={address}
onChange={(e)=>setAddress(e.target.value)}
style={{padding:10,width:"100%",marginTop:20}}
/>

<button
onClick={register}
style={{
marginTop:20,
padding:10,
width:"100%",
background:"green",
color:"white",
border:"none",
borderRadius:5
}}
>
Create Account
</button>

</div>
</div>

);

}
