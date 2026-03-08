"use client";

export default function HomePage(){

return(

<div style={{fontFamily:"Arial"}}>

{/* HERO */}

<div style={{
background:"#2e7d32",
color:"white",
padding:"80px 20px",
textAlign:"center"
}}>

<h1 style={{fontSize:42}}>Gau Trust Milk</h1>

<p style={{fontSize:20,marginTop:10}}>
Fresh Milk & Dairy Products Delivered To Your Home
</p>

<a href="/order">

<button style={{
marginTop:30,
padding:"14px 28px",
fontSize:18,
background:"white",
color:"#2e7d32",
border:"none",
borderRadius:8
}}>

Order Now

</button>

</a>

</div>

{/* PRODUCTS */}

<div style={{padding:40,textAlign:"center"}}>

<h2>Our Products</h2>

<div style={{
display:"flex",
justifyContent:"center",
gap:20,
flexWrap:"wrap",
marginTop:30
}}>

<Product name="Milk" price="₹60 / Litre"/>
<Product name="Paneer" price="Fresh Paneer"/>
<Product name="Curd" price="Homemade Curd"/>
<Product name="Ghee" price="Desi Ghee"/>
<Product name="Butter" price="Fresh Butter"/>

</div>

</div>

{/* WHY */}

<div style={{
background:"#f5f5f5",
padding:40,
textAlign:"center"
}}>

<h2>Why Choose Gau Trust Milk</h2>

<p style={{maxWidth:600,margin:"20px auto"}}>
Fresh milk directly sourced from trusted dairy farms and delivered to your home daily.
</p>

</div>

{/* DELIVERY */}

<div style={{padding:40,textAlign:"center"}}>

<h2>Delivery Timing</h2>

<p>Morning Delivery: 6 AM – 9 AM</p>
<p>Evening Delivery: 5 PM – 8 PM</p>

</div>

{/* FOOTER */}

<div style={{
background:"#2e7d32",
color:"white",
padding:20,
textAlign:"center"
}}>

<p>© 2026 Gau Trust Milk</p>

</div>

</div>

)

}

function Product({name,price}:{name:string,price:string}){

return(

<div style={{
border:"1px solid #ddd",
padding:20,
width:180,
borderRadius:10
}}>

<h3>{name}</h3>
<p>{price}</p>

</div>

)

}
