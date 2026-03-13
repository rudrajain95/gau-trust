"use client";

import { useEffect, useState } from "react";

export default function CustomersPage(){

const [customers,setCustomers] = useState<any[]>([]);

useEffect(()=>{

const admin = localStorage.getItem("adminLogin");

if(!admin){
window.location.href="/admin/login";
return;
}

loadCustomers();

},[]);

const loadCustomers = async ()=>{

const res = await fetch("/api/admin/customers");

const data = await res.json();

setCustomers(data);

};

const activateSubscription = async (mobile:string)=>{

const res = await fetch("/api/admin/customers/subscribe",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
mobile
})

});

const data = await res.json();

if(data.success){

alert("Subscription activated");

loadCustomers();

}

};

const addCoins = async (mobile:string)=>{

const coins = prompt("Enter coins to add");

if(!coins) return;

await fetch("/api/admin/customers/add-coins",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
mobile,
coins:Number(coins)
})

});

alert("Coins added");

loadCustomers();

};

return(

<div style={{padding:30,fontFamily:"Arial"}}>

<h1>Customer Management</h1>

<table style={{
width:"100%",
borderCollapse:"collapse",
marginTop:20
}}>

<thead>

<tr>

<th style={th}>Name</th>
<th style={th}>Mobile</th>
<th style={th}>Address</th>
<th style={th}>Trial</th>
<th style={th}>Subscription</th>
<th style={th}>Coins</th>
<th style={th}>Joined</th>
<th style={th}>Actions</th>

</tr>

</thead>

<tbody>

{customers.map((c:any)=>(

<tr key={c.id}>

<td style={td}>{c.name}</td>

<td style={td}>{c.mobile}</td>

<td style={td}>{c.address}</td>

<td style={td}>

{c.trialEnd
? `Trial until ${new Date(c.trialEnd).toLocaleDateString()}`
: "No trial"}

</td>

<td style={td}>

{c.subscription
? "Active"
: "Not Subscribed"}

</td>

<td style={td}>{c.coins}</td>

<td style={td}>
{new Date(c.createdAt).toLocaleDateString()}
</td>

<td style={td}>

<button
onClick={()=>activateSubscription(c.mobile)}
style={btnGreen}
>

Activate Subscription

</button>

<button
onClick={()=>addCoins(c.mobile)}
style={{...btnBlue,marginLeft:8}}
>

Add Coins

</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

)

}

const th = {
border:"1px solid #ddd",
padding:10,
background:"#f5f5f5"
}

const td = {
border:"1px solid #ddd",
padding:10
}

const btnGreen = {
padding:"6px 10px",
background:"green",
color:"white",
border:"none"
}

const btnBlue = {
padding:"6px 10px",
background:"#1976d2",
color:"white",
border:"none"
}
