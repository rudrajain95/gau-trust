"use client";

import { useEffect, useState } from "react";

export default function ShopProductsPage(){

const [products,setProducts]=useState<any[]>([]);

const shopId = typeof window!=="undefined"
? localStorage.getItem("shopId")
: null;

const loadProducts=async()=>{

const res=await fetch(`/api/shops/products?shopId=${shopId}`);
const data=await res.json();

setProducts(data);

}

useEffect(()=>{
loadProducts();
},[]);

return(

<div style={{padding:30,fontFamily:"Arial"}}>

<h1>My Products</h1>

<table style={{
width:"100%",
borderCollapse:"collapse",
marginTop:20
}}>

<thead>
<tr>
<th style={th}>Product</th>
<th style={th}>Price</th>
<th style={th}>Unit</th>
</tr>
</thead>

<tbody>

{products.map((p)=>(
<tr key={p.id}>
<td style={td}>{p.name}</td>
<td style={td}>₹{p.price}</td>
<td style={td}>{p.unit}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}

const th={
border:"1px solid #ddd",
padding:10,
background:"#f5f5f5"
}

const td={
border:"1px solid #ddd",
padding:8
}
