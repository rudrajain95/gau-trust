"use client";

export default function Home(){

return(

<div style={{fontFamily:"Arial"}}>

{/* HEADER */}

<div style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:20,
background:"#ffffff",
borderBottom:"1px solid #eee"
}}>

<h2>🐄 Gau Trust Milk</h2>

<div>

<a href="/login">
<button style={{
padding:10,
marginRight:10,
background:"#1976d2",
color:"white",
border:"none",
borderRadius:6
}}>
Customer Login
</button>
</a>

<a href="/admin/login">
<button style={{
padding:10,
marginRight:10,
background:"#444",
color:"white",
border:"none",
borderRadius:6
}}>
Admin Login
</button>
</a>

<a href="/delivery/login">
<button style={{
padding:10,
background:"#ff9800",
color:"white",
border:"none",
borderRadius:6
}}>
Delivery Login
</button>
</a>

</div>

</div>


{/* HERO */}

<div style={{
background:"#e3f2fd",
padding:60,
textAlign:"center"
}}>

<h1>Pure Farm Fresh Milk Delivered Daily</h1>

<p style={{maxWidth:700,margin:"auto",marginTop:10}}>

Fresh milk delivered with farm transparency.  
Watch daily farm videos and enjoy healthy dairy products directly from trusted farms.

</p>

<p style={{marginTop:10}}>
You can also order from your preferred nearby dairy shop.
</p>

</div>


{/* ABOUT */}

<div style={{padding:50,textAlign:"center"}}>

<h2>About Gau Trust</h2>

<p style={{maxWidth:700,margin:"auto"}}>

Gau Trust Milk is a local dairy delivery platform providing fresh
farm milk and dairy products directly to homes.

Our mission is to connect trusted dairy farms and dairy
