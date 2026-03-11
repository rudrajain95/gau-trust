"use client";

export default function AdminDashboard(){

return(

<div style={{
padding:40,
fontFamily:"Arial"
}}>

<h1>Admin Dashboard</h1>

<div style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:30,
marginTop:40
}}>

<a href="/admin/products">
<div style={{
border:"1px solid #ddd",
padding:30,
borderRadius:10,
textAlign:"center"
}}>
<h3>Products</h3>
</div>
</a>

<a href="/admin/orders">
<div style={{
border:"1px solid #ddd",
padding:30,
borderRadius:10,
textAlign:"center"
}}>
<h3>Orders</h3>
</div>
</a>

<a href="/admin/delivery">
<div style={{
border:"1px solid #ddd",
padding:30,
borderRadius:10,
textAlign:"center"
}}>
<h3>Delivery</h3>
</div>
</a>

<a href="/admin/customers">
<div style={{
border:"1px solid #ddd",
padding:30,
borderRadius:10,
textAlign:"center"
}}>
<h3>Customers</h3>
</div>
</a>

<a href="/admin/settings">
<div style={{
border:"1px solid #ddd",
padding:30,
borderRadius:10,
textAlign:"center"
}}>
<h3>Settings</h3>
</div>
</a>

</div>

</div>

)

}
