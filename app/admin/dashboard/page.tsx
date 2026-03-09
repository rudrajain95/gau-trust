"use client";

export default function AdminDashboard(){

return(

<div style={{padding:30,fontFamily:"Arial"}}><h1>Admin Control Panel</h1><div style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:20,
marginTop:30
}}><a href="/admin/products">
<div style={{padding:30,border:"1px solid #ddd",borderRadius:10,textAlign:"center"}}>
<h3>Products</h3>
</div>
</a><a href="/admin/orders">
<div style={{padding:30,border:"1px solid #ddd",borderRadius:10,textAlign:"center"}}>
<h3>Orders</h3>
</div>
</a><a href="/admin/delivery">
<div style={{padding:30,border:"1px solid #ddd",borderRadius:10,textAlign:"center"}}>
<h3>Delivery</h3>
</div>
</a><a href="/admin/leads">
<div style={{padding:30,border:"1px solid #ddd",borderRadius:10,textAlign:"center"}}>
<h3>Customers</h3>
</div>
</a><div
onClick={()=>{
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
