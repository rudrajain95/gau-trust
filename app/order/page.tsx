"use client";

import { useEffect, useState } from "react";

export default function OrderPage(){

  const [products,setProducts]=useState<any[]>([]);
  const [product,setProduct]=useState("");
  const [quantity,setQuantity]=useState("");
  const [name,setName]=useState("");
  const [mobile,setMobile]=useState("");
  const [address,setAddress]=useState("");

  useEffect(()=>{

    const loadProducts=async()=>{

      const res=await fetch("/api/products");
      const data=await res.json();

      setProducts(data);

      if(data.length>0){
        setProduct(data[0].name);
      }

    }

    loadProducts();

  },[]);

  const submitOrder=async()=>{

    const res=await fetch("/api/order",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        mobile,
        address,
        product,
        quantity,
        payment:"cod"
      })
    });

    const data=await res.json();

    if(data.success){
      alert("Order placed successfully");
      setQuantity("");
    }else if(data.subscriptionRequired){
      alert("Trial expired. Please subscribe.");
      localStorage.setItem("subscriptionMobile",mobile);
      window.location.href="/subscribe";
    }else{
      alert("Order failed");
    }

  }

  return(

    <div style={{padding:30,fontFamily:"Arial"}}>

      <h1>Order Milk</h1>

      <input
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        style={{display:"block",marginTop:10,padding:10,width:300}}
      />

      <input
        placeholder="Mobile"
        value={mobile}
        onChange={(e)=>setMobile(e.target.value)}
        style={{display:"block",marginTop:10,padding:10,width:300}}
      />

      <input
        placeholder="Address"
        value={address}
        onChange={(e)=>setAddress(e.target.value)}
        style={{display:"block",marginTop:10,padding:10,width:300}}
      />

      <select
        value={product}
        onChange={(e)=>setProduct(e.target.value)}
        style={{display:"block",marginTop:10,padding:10,width:300}}
      >
        {products.map((p)=>(
          <option key={p.id}>
            {p.name} - ₹{p.price}/{p.unit}
          </option>
        ))}
      </select>

      <input
        placeholder="Quantity"
        value={quantity}
        onChange={(e)=>setQuantity(e.target.value)}
        style={{display:"block",marginTop:10,padding:10,width:300}}
      />

      <button
        onClick={submitOrder}
        style={{
          marginTop:20,
          padding:12,
          background:"green",
          color:"white",
          border:"none"
        }}
      >
        Place Order
      </button>

    </div>

  )

}
