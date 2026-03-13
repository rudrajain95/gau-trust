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

const months = prompt("Enter subscription months", "1");

if(!months) return;

const res = await fetch("/api/admin/customers/subscribe",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
mobile,
months:Number(months)
})
});

const data = await res.json();

if(data.success){
alert("Subscription activated");
loadCustomers();
}else{
alert(data.message);
}

};

const addCoins = async (mobile:string)=>{

const coins = prompt("Enter coins to add");

if(!coins) return;

const reason = prompt("Reason for adding coins", "Reward bonus");

await fetch("/api/admin/customers/add-coins",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
mobile,
coins:Number(coins),
reason
})
});

alert("Coins added");
loadCustomers();

};

const viewOrders = (mobile:string)=>{
window.location.href=`/admin/customers/orders?mobile=${mobile}`;
};

return(

<div style={{padding:30,fontFamily:"Arial"}}>

<h1>Customer Management</h1>

<div style={{
display:"flex",
gap:20,
flexWrap:"wrap",
marginTop:20,
marginBottom:20
}}>

<div style={card}>
<h2>{customers.length}</h2>
<p>Total Customers</p>
</div>

<div style={card}>
<h2>{customers.filter((c:any)=>c.displayStatus==="Trial Active").length}</h2>
<p>Trial Users</p>
</div>

<div style={card}>
<h2>{customers.filter((c:any)=>c.displayStatus==="Subscriber").length}</h2>
<p>Subscribers</p>
</div>

<div style={card}>
<h2>{customers.filter((c:any)=>c.displayStatus==="Expired").length}</h2>
<p>Expired</p>
</div>

</div>

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
<th style={th}>Status</th>
<th style={th}>Wallet Coins</th>
<th style={th}>Orders</th>
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
{c.displayStatus==="Trial Active" && "🟡 Trial Active"}
{c.displayStatus==="Trial Expired" && "🔴 Trial Expired"}
{c.displayStatus==="Subscriber" && "🟢 Subscriber"}
{c.displayStatus==="Expired" && "⚫ Expired"}
</td>

<td style={td}>{c.coins}</td>

<td style={td}>{c.orderCount}</td>

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

<button
onClick={()=>viewOrders(c.mobile)}
style={{...btnOrange,marginLeft:8}}
>
View Orders
</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

)

}

const card = {
border:"1px solid #ddd",
padding:20,
borderRadius:10,
width:200,
textAlign:"center" as const,
boxShadow:"0 2px 6px rgba(0,0,0,0.1)"
};

const th = {
border:"1px solid #ddd",
padding:10,
background:"#f5f5f5"
};

const td = {
border:"1px solid #ddd",
padding:10
};

const btnGreen = {
padding:"6px 10px",
background:"green",
color:"white",
border:"none",
borderRadius:4
};

const btnBlue = {
padding:"6px 10px",
background:"#1976d2",
color:"white",
border:"none",
borderRadius:4
};

const btnOrange = {
padding:"6px 10px",
background:"#ff9800",
color:"white",
border:"none",
borderRadius:4
};
