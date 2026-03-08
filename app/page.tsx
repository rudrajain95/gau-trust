"use client";

export default function HomePage(){

return(

<div style={{fontFamily:"Arial",background:"#e8f4ff"}}>

{/* HEADER */}

<div style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"15px 30px",
background:"white",
boxShadow:"0 2px 5px rgba(0,0,0,0.1)"
}}>

<h2 style={{margin:0}}>Gau Trust Milk</h2>

<div>

<a href="/login">
<button style={{
marginRight:10,
padding:"8px 16px",
border:"1px solid #333",
background:"white",
cursor:"pointer"
}}>
Customer Login
</button>
</a>

<a href="/admin/login">

<button style={{
padding:"8px 16px",
background:"#333",
color:"white",
border:"none",
cursor:"pointer"
}}>
Admin Login
</button>

</a>

</div>

</div>

{/* HERO */}

<div style={{
textAlign:"center",
padding:"70px 20px"
}}>

<h1 style={{fontSize:40}}>Fresh Milk Delivered Daily</h1>

<p style={{fontSize:18,maxWidth:600,margin:"10px auto"}}>
Pure and fresh dairy products delivered directly to your home.
</p>

<a href="/order">

<button style={{
marginTop:25,
padding:"14px 30px",
fontSize:18,
background:"#2196f3",
color:"white",
border:"none",
borderRadius:8
}}>
Order Milk
</button>

</a>

</div>

{/* BROADCAST */}

<div style={{
background:"#fff",
padding:30,
textAlign:"center"
}}>

<h2>Important Update</h2>

<p>Subscription customers get same day delivery.</p>

<p>Non-subscription customers will receive delivery next day.</p>

</div>

{/* DELIVERY RULES */}

<div style={{
padding:40,
textAlign:"center"
}}>

<h2>Delivery Rules</h2>

<p><b>Order Time:</b> 6 AM – 8 PM</p>

<p><b>Delivery Time:</b> 6 AM – 11 AM</p>

<p><b>Subscription Customers:</b> Same Day Delivery</p>

<p><b>Normal Customers:</b> Next Day Delivery</p>

</div>

{/* PRODUCTS */}

<div style={{
background:"white",
padding:40,
textAlign:"center"
}}>

<h2>Our Products</h2>

<div style={{
display:"flex",
justifyContent:"center",
gap:20,
flexWrap:"wrap",
marginTop:30
}}>

<Product name="Milk"/>
<Product name="Paneer"/>
<Product name="Curd"/>
<Product name="Butter"/>
<Product name="Ghee"/>

</div>

</div>

{/* ABOUT */}

<div style={{
padding:40,
textAlign:"center"
}}>

<h2>About Gau Trust Milk</h2>

<p style={{maxWidth:700,margin:"20px auto"}}>

Gau Trust Milk provides fresh milk and dairy products sourced
directly from trusted dairy farms and gaushalas.
Our goal is to deliver pure milk to every household with reliable
delivery service.

</p>

</div>

{/* FOOTER */}

<div style={{
background:"#333",
color:"white",
padding:20,
textAlign:"center"
}}>

<p>© 2026 Gau Trust Milk</p>

</div>

</div>

)

}

function Product({name}:{name:string}){

return(

<div style={{
border:"1px solid #ddd",
padding:20,
width:180,
borderRadius:8
}}>

<h3>{name}</h3>

</div>

)

}
