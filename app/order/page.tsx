"use client";

import { useEffect, useState } from "react";

export default function OrderPage() {

  const [products,setProducts]=useState<any[]>([]);
  const [product,setProduct]=useState("");
  const [quantity,setQuantity]=useState("");
  const [name,setName]=useState("");
  const [mobile,setMobile]=useState("");
  const [address,setAddress]=useState("");
  const [message,setMessage]=useState("");

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


  const checkTrial = async () => {

    const res = await fetch("/api/trial-status",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({ mobile })
    });

    const data = await res.json();

    if(data.expired){

      alert("Your 7 day trial expired. Please subscribe.");

      localStorage.setItem("subscriptionMobile",mobile);

      window.location.href="/subscribe";

      return false;

    }

    if(data.daysLeft){
      setMessage("Trial days remaining: "+data.daysLeft);
    }

    return true;

  }


  const submitOrder=async()=>{

    if(!name || !mobile || !address || !quantity){
      alert("Please fill all fields");
      return;
    }

    const allow = await checkTrial();

    if(!allow){
      return;
    }

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
    }else{
      alert("Order failed");
    }

  }

  return(

    <div style={{
      padding:30,
      fontFamily:"Arial",
      maxWidth:500,
      margin:"auto"
    }}>

      <h1 style={{marginBottom:20}}>Order Milk</h1>

      {message && (
        <div style={{
          background:"#e8f5e9",
          padding:10,
          borderRadius:6,
          marginBottom:15,
          color:"#2e7d32"
        }}>
          {message}
        </div>
      )}

      <input
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        style={inputStyle}
      />

      <input
        placeholder="Mobile"
        value={mobile}
        onChange={(e)=>setMobile(e.target.value)}
        style={inputStyle}
      />

      <input
        placeholder="Address"
        value={address}
        onChange={(e)=>setAddress(e.target.value)}
        style={inputStyle}
      />

      <select
        value={product}
        onChange={(e)=>setProduct(e.target.value)}
        style={inputStyle}
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
        style={inputStyle}
      />

      <button
        onClick={submitOrder}
        style={{
          marginTop:20,
          padding:14,
          background:"#2e7d32",
          color:"white",
          border:"none",
          width:"100%",
          fontSize:16,
          borderRadius:6,
          cursor:"pointer"
        }}
      >
        Place Order
      </button>

    </div>

  )

}

const inputStyle={
  display:"block",
  marginTop:10,
  padding:12,
  width:"100%",
  border:"1px solid #ccc",
  borderRadius:6
}
