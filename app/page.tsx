"use client";

export default function Home(){

return(

<div style={{fontFamily:"Arial"}}>{/* HEADER */}

<div style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:20,
background:"#ffffff",
borderBottom:"1px solid #eee"
}}><h2>🐄 Gau Trust Milk</h2><div>
  <a href="/signup">
<button
style={{
padding:10,
marginRight:10,
background:"green",
color:"white",
border:"none",
borderRadius:6
}}
>
Customer Signup
</button>
</a>
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
background:"#444",
color:"white",
border:"none",
borderRadius:6
}}>
Admin Login
</button>
</a>
</div></div>{/* HERO */}

<div style={{
background:"#e3f2fd",
padding:50,
textAlign:"center"
}}><h1>Pure Farm Fresh Milk Delivered Daily</h1><p>
Fresh milk and dairy products sourced directly from trusted farms
and delivered to your doorstep in Chhatarpur.
</p></div>{/* ABOUT */}

<div style={{padding:40,textAlign:"center"}}><h2>About Gau Trust</h2><p style={{maxWidth:700,margin:"auto"}}>
Gau Trust Milk is a local dairy delivery platform providing fresh
farm milk and dairy products directly to homes. Our mission is to
connect trusted dairy farms with customers and deliver healthy milk
every morning.
</p></div>{/* DELIVERY POLICY */}

<div style={{
background:"#f5f5f5",
padding:40,
textAlign:"center"
}}><h2>Delivery Policy</h2><p>
Subscription customers receive same-day milk delivery.
Orders placed before evening are delivered between
<b>6 AM – 11 AM</b>.
</p><p>
Non-subscription customers can order anytime but delivery
will be next day between <b>6 AM – 11 AM</b>.
</p></div>{/* PRODUCTS */}

<div style={{padding:40,textAlign:"center"}}><h2>Our Products</h2><div style={{
display:"flex",
justifyContent:"center",
gap:30,
flexWrap:"wrap",
marginTop:30
}}><div style={{
border:"1px solid #ddd",
padding:20,
borderRadius:10,
width:180
}}>
<h3>Milk</h3>
</div><div style={{
border:"1px solid #ddd",
padding:20,
borderRadius:10,
width:180
}}>
<h3>Paneer</h3>
</div><div style={{
border:"1px solid #ddd",
padding:20,
borderRadius:10,
width:180
}}>
<h3>Curd</h3>
</div></div></div>{/* FOOTER */}

<div style={{
background:"#222",
color:"white",
padding:30,
textAlign:"center"
}}><p>© 2026 Gau Trust Milk</p>
<p>Fresh dairy delivery in Chhatarpur</p></div></div>)

}
