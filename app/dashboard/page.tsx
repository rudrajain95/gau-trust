"use client";

export default function Dashboard(){

return(

<div style={{
padding:30,
fontFamily:"Arial"
}}><h1>Customer Dashboard</h1><div style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:20,
marginTop:30
}}><a href="/order">
<div style={{
padding:30,
border:"1px solid #ddd",
borderRadius:10,
textAlign:"center",
cursor:"pointer"
}}>
<h3>Order</h3>
</div>
</a><a href="/orders">
<div style={{
padding:30,
border:"1px solid #ddd",
borderRadius:10,
textAlign:"center"
}}>
<h3>My Orders</h3>
</div>
</a><a href="/subscribe">
<div style={{
padding:30,
border:"1px solid #ddd",
borderRadius:10,
textAlign:"center"
}}>
<h3>Subscription</h3>
</div>
</a><a href="/profile">
<div style={{
padding:30,
border:"1px solid #ddd",
borderRadius:10,
textAlign:"center"
}}>
<h3>Profile</h3>
</div>
</a><a href="/track">
<div style={{
padding:30,
border:"1px solid #ddd",
borderRadius:10,
textAlign:"center"
}}>
<h3>Track Order</h3>
</div>
</a><div
onClick={()=>{
localStorage.removeItem("customerMobile");
window.location.href="/";
}}
style={{
padding:30,
border:"1px solid #ddd",
borderRadius:10,
textAlign:"center",
cursor:"pointer"
}}
>
<h3>Logout</h3>
</div></div></div>)

}
