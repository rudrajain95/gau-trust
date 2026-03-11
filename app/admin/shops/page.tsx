"use client";

import { useEffect, useState } from "react";

export default function AdminShopsPage() {
  const [shops, setShops] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");

  useEffect(() => {
    const admin = localStorage.getItem("adminLogin");

    if (!admin) {
      window.location.href = "/admin/login";
      return;
    }

    loadShops();
  }, []);

  const loadShops = async () => {
    const res = await fetch("/api/shops/list");
    const data = await res.json();
    setShops(data);
  };

  const addShop = async () => {
    const res = await fetch("/api/shops/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        ownerName,
        mobile,
        address,
        area
      })
    });

    const data = await res.json();

    if (data.success) {
      alert("Shop added");
      setName("");
      setOwnerName("");
      setMobile("");
      setAddress("");
      setArea("");
      loadShops();
    } else {
      alert(data.message);
    }
  };

  const toggleShop = async (shop: any) => {
    const res = await fetch("/api/shops/toggle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: shop.id,
        active: !shop.active
      })
    });

    const data = await res.json();

    if (data.success) {
      loadShops();
    } else {
      alert(data.message);
    }
  };

  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>
      <h1>Shop Management</h1>

      <div style={{
        border: "1px solid #ddd",
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
        maxWidth: 500
      }}>
        <h3>Add Shop</h3>

        <input
          placeholder="Shop Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={input}
        />

        <input
          placeholder="Owner Name"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
          style={input}
        />

        <input
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          style={input}
        />

        <input
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={input}
        />

        <input
          placeholder="Area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          style={input}
        />

        <button
          onClick={addShop}
          style={{
            marginTop: 15,
            padding: 10,
            background: "green",
            color: "white",
            border: "none",
            borderRadius: 6
          }}
        >
          Add Shop
        </button>
      </div>

      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: 30
      }}>
        <thead>
          <tr>
            <th style={th}>Shop</th>
            <th style={th}>Owner</th>
            <th style={th}>Mobile</th>
            <th style={th}>Area</th>
            <th style={th}>Status</th>
            <th style={th}>Action</th>
          </tr>
        </thead>

        <tbody>
          {shops.map((shop) => (
            <tr key={shop.id}>
              <td style={td}>{shop.name}</td>
              <td style={td}>{shop.ownerName || "-"}</td>
              <td style={td}>{shop.mobile}</td>
              <td style={td}>{shop.area || "-"}</td>
              <td style={td}>{shop.active ? "Active" : "Disabled"}</td>
              <td style={td}>
                <button
                  onClick={() => toggleShop(shop)}
                  style={{
                    padding: "6px 10px",
                    background: shop.active ? "red" : "green",
                    color: "white",
                    border: "none",
                    borderRadius: 4
                  }}
                >
                  {shop.active ? "Disable" : "Enable"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const input = {
  display: "block" as const,
  marginTop: 10,
  padding: 10,
  width: "100%"
};

const th = {
  border: "1px solid #ddd",
  padding: 10,
  background: "#f5f5f5"
};

const td = {
  border: "1px solid #ddd",
  padding: 8
};
