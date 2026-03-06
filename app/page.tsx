"use client";

export default function HomePage() {
  return (
    <div style={{fontFamily:"Arial",padding:30}}>

      <h1>Gau Trust Milk</h1>

      <p>
        Fresh milk and dairy products delivered to your home.
      </p>

      <br/>

      <a href="/order">
        <button style={{
          padding:12,
          background:"green",
          color:"white",
          border:"none"
        }}>
          Order Milk
        </button>
      </a>

      <br/><br/>

      <a href="/admin">
        <button style={{
          padding:12,
          background:"black",
          color:"white",
          border:"none"
        }}>
          Admin Login
        </button>
      </a>

    </div>
  );
}
