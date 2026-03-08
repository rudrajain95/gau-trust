"use client";

export default function HomePage() {

return (

<div style={{fontFamily:"Arial"}}>

{/* HERO */}

<div style={{
background:"#1b5e20",
color:"white",
padding:"80px 20px",
textAlign:"center"
}}>

<h1 style={{fontSize:44}}>Gau Trust Milk</h1>

<p style={{fontSize:20,marginTop:10}}>
Fresh Milk & Dairy Products Delivered To Your Home
</p>

<a href="/order">

<button style={{
marginTop:30,
padding:"14px 30px",
fontSize:18,
background:"#ffc107",
color:"black",
border:"none",
borderRadius:8,
cursor:"pointer"
}}>

Customer Order

</button>

</a>

</div>

{/* ABOUT */}

<div style={{padding:40,textAlign:"center"}}>

<h2>About Gau Trust Milk</h2>

<p style={{maxWidth:700,margin:"20px auto",fontSize:18}}>

Gau Trust Milk provides fresh and pure milk directly sourced from trusted dairy farms and gau shalas.
Our mission is to deliver healthy dairy products to every household with reliable daily delivery.

</p>

</div>

{/* PRODUCTS */}

<div style={{background:"#f5f5f5",padding:40,textAlign:"center"}}>

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
<Product name="Butter" price="Fresh Butter"/>
<Product name="Ghee" price="Desi Ghee"/>

</div>

</div>

{/* DELIVERY RULES */}

<div style={{padding:40,textAlign:"center"}}>

<h2>Delivery Information</h2>

<p style={{fontSize:18,marginTop:20}}>

Subscription Customers  
</p>

<p>
Same Day Delivery Available  
<br/>
Order Time: 6 AM – 8 PM
</p>

<br/>

<p style={{fontSize:18}}>

Non-Subscription Customers
</p>

<p>
Order Today → Delivery Next Day  
<br/>
Order Time: 6 AM – 11 AM
</p>

</div>

{/* SUBSCRIPTION */}

<div style={{
background:"#1b5e20",
color:"white",
padding:40,
textAlign:"center"
}}>

<h2>Monthly Subscription</h2>

<p style={{fontSize:18,marginTop:10}}>

₹199 / Month

</p>

<p>

Benefits:

</p>

<p>

• Free Delivery  
<br/>
• Same Day Delivery  
<br/>
• Priority Milk Supply  

</p>

</div>

{/* FOOTER */}

<div style={{
background:"#263238",
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
borderRadius:10,
background:"white"
}}>

<h3>{name}</h3>

<p>{price}</p>

</div>

)

}
