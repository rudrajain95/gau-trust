"use client";

export default function Home() {

return(

<div style={{fontFamily:"Arial, sans-serif",background:"#f8fbff"}}>

{/* HEADER */}

<div style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"18px 30px",
background:"#ffffff",
borderBottom:"1px solid #e5e7eb",
position:"sticky",
top:0,
zIndex:10
}}>

<h2 style={{color:"#1d4ed8"}}>🐄 Gau Trust Milk</h2>

<div>

<a href="/signup">
<button style={signupBtn}>
Customer Signup
</button>
</a>

<a href="/login">
<button style={loginBtn}>
Customer Login
</button>
</a>

<a href="/admin/login">
<button style={adminBtn}>
Admin Login
</button>
</a>

</div>

</div>

{/* HERO SECTION */}

<div style={{
padding:"80px 30px",
background:"linear-gradient(135deg,#e0f2fe,#f0f9ff)",
textAlign:"center"
}}>

<h1 style={{
fontSize:48,
marginBottom:20,
color:"#0f172a"
}}>
Pure Farm Fresh Milk Delivered Daily
</h1>

<p style={{
fontSize:18,
maxWidth:700,
margin:"auto",
color:"#475569",
lineHeight:1.7
}}>
Gau Trust Milk delivers fresh farm milk and dairy products
directly from trusted farms and local dairy shops to homes.
Customers also receive daily farm video updates for trust.
</p>

<div style={{marginTop:30}}>

<a href="/signup">
<button style={heroBtn}>
Start Free Trial
</button>
</a>

<a href="/login">
<button style={heroLogin}>
Customer Login
</button>
</a>

</div>

</div>

{/* TRUST SECTION */}

<div style={{
padding:"60px 30px",
maxWidth:1100,
margin:"auto"
}}>

<h2 style={sectionTitle}>
Why Customers Trust Gau Trust
</h2>

<div style={grid}>

<div style={card}>
<h3>🎥 Farm Transparency</h3>
<p>
Customers receive daily farm videos so they know exactly
where their milk comes from.
</p>
</div>

<div style={card}>
<h3>🥛 Fresh Dairy</h3>
<p>
Milk and dairy products sourced directly from trusted
local farms.
</p>
</div>

<div style={card}>
<h3>🏪 Nearby Dairy Shop Choice</h3>
<p>
Customers can also order from their preferred nearby dairy
shop.
</p>
</div>

<div style={card}>
<h3>🚚 Reliable Delivery</h3>
<p>
Subscription customers receive priority same-day delivery
service.
</p>
</div>

</div>

</div>

{/* ABOUT SECTION */}

<div style={{
background:"#ffffff",
padding:"60px 30px"
}}>

<div style={{maxWidth:1000,margin:"auto"}}>

<h2 style={sectionTitle}>
About Gau Trust
</h2>

<p style={aboutText}>
Gau Trust Milk is a local dairy delivery platform built
to connect trusted dairy farms, local milk suppliers
and customers. Our goal is to provide pure fresh milk,
transparent sourcing and reliable home delivery.
</p>

<p style={aboutText}>
We focus on customer trust, freshness and professional
service while supporting local dairy businesses.
</p>

</div>

</div>

{/* DELIVERY POLICY */}

<div style={{
padding:"60px 30px",
background:"#f1f5f9"
}}>

<h2 style={sectionTitle}>
Delivery Policy
</h2>

<div style={grid}>

<div style={card}>
<h3>⭐ Subscription Customers</h3>

<p>
Same day delivery available
</p>

<p>
Delivery Time
</p>

<b>6 AM – 9 PM</b>

</div>

<div style={card}>
<h3>📦 Non-Subscription Customers</h3>

<p>
Orders can be placed anytime.
</p>

<p>
Next day delivery window
</p>

<b>7 AM – 11 AM</b>

</div>

</div>

</div>

{/* PRODUCTS */}

<div style={{
padding:"60px 30px",
maxWidth:1100,
margin:"auto"
}}>

<h2 style={sectionTitle}>
Our Dairy Products
</h2>

<div style={grid}>

<div style={productCard}>
🥛 Milk
</div>

<div style={productCard}>
🧀 Paneer
</div>

<div style={productCard}>
🥣 Curd
</div>

<div style={productCard}>
🥤 Butter Milk
</div>

<div style={productCard}>
🧈 Butter
</div>

<div style={productCard}>
🍞 Bread & Dairy Essentials
</div>

</div>

</div>

{/* CTA */}

<div style={{
padding:"70px 30px",
background:"#1d4ed8",
color:"white",
textAlign:"center" as const
}}>

<h2>
Start Your Gau Trust Experience Today
</h2>

<p>
Signup today to enjoy fresh dairy delivery
with trust and quality.
</p>

<a href="/signup">
<button style={ctaBtn}>
Create Customer Account
</button>
</a>

</div>

{/* FOOTER */}

<div style={{
padding:30,
background:"#0f172a",
color:"#cbd5e1",
textAlign:"center" as const
}}>

<p>© 2026 Gau Trust Milk</p>

<p>Fresh dairy delivery in Chhatarpur</p>

</div>

</div>

)

}

const signupBtn={
padding:"10px 16px",
background:"#16a34a",
color:"white",
border:"none",
borderRadius:6,
marginRight:10
}

const loginBtn={
padding:"10px 16px",
background:"#2563eb",
color:"white",
border:"none",
borderRadius:6,
marginRight:10
}

const adminBtn={
padding:"10px 16px",
background:"#0f172a",
color:"white",
border:"none",
borderRadius:6
}

const heroBtn={
padding:"14px 24px",
background:"#16a34a",
color:"white",
border:"none",
borderRadius:10,
fontSize:16,
marginRight:15
}

const heroLogin={
padding:"14px 24px",
background:"#ffffff",
color:"#0f172a",
border:"1px solid #ddd",
borderRadius:10,
fontSize:16
}

const sectionTitle={
fontSize:32,
marginBottom:30,
textAlign:"center" as const
}

const grid={
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
gap:20
}

const card={
background:"#ffffff",
padding:25,
borderRadius:10,
boxShadow:"0 6px 20px rgba(0,0,0,0.08)"
}

const productCard={
background:"#ffffff",
padding:30,
borderRadius:10,
textAlign:"center" as const,
fontSize:20,
boxShadow:"0 6px 20px rgba(0,0,0,0.08)"
}

const aboutText={
fontSize:17,
lineHeight:1.8,
color:"#475569",
marginTop:15
}

const ctaBtn={
marginTop:20,
padding:"14px 28px",
background:"#ffffff",
color:"#1d4ed8",
border:"none",
borderRadius:10,
fontSize:16
}
