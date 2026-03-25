"use client";

import { useEffect, useState } from "react";

export default function AdminShopsPage() {
  const [shops, setShops] = useState<any[]>([]);
  const [form, setForm] = useState({
    name: "",
    ownerName: "",
    mobile: "",
    address: "",
    area: ""
  });

  const [message, setMessage] = useState("");

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
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (data.success) {
      setMessage("✅ Shop created | Default Password: " + data.defaultPassword);

      setForm({
        name: "",
        ownerName: "",
        mobile: "",
        address: "",
        area: ""
      });

      loadShops();
    } else {
      setMessage("❌ " + data.message);
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
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Shop Partners Management</h1>

      {/* ADD SHOP FORM */}
      <div className="card" style={{ maxWidth: 500 }}>
        <h3>Add New Shop</h3>

        <input
          placeholder="Shop Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <br /><br />

        <input
          placeholder="Owner Name"
          value={form.ownerName}
          onChange={(e) => setForm({ ...form, ownerName: e.target.value })}
        />

        <br /><br />

        <input
          placeholder="Mobile"
          value={form.mobile}
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
        />

        <br /><br />

        <input
          placeholder="Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />

        <br /><br />

        <input
          placeholder="Area"
          value={form.area}
          onChange={(e) => setForm({ ...form, area: e.target.value })}
        />

        <br /><br />

        <button className="primary-btn" onClick={addShop}>
          Create Shop
        </button>

        <p style={{ marginTop: 10 }}>{message}</p>
      </div>

      {/* SHOP LIST */}
      <div className="card" style={{ marginTop: 30 }}>
        <h3>All Shops</h3>

        <table style={{ width: "100%", marginTop: 15 }}>
          <thead>
            <tr>
              <th>Shop</th>
              <th>Owner</th>
              <th>Mobile</th>
              <th>Area</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {shops.map((shop) => (
              <tr key={shop.id}>
                <td>{shop.name}</td>
                <td>{shop.ownerName || "-"}</td>
                <td>{shop.mobile}</td>
                <td>{shop.area || "-"}</td>
                <td>{shop.active ? "Active" : "Disabled"}</td>

                <td>
                  <button
                    className={shop.active ? "danger-btn" : "primary-btn"}
                    onClick={() => toggleShop(shop)}
                  >
                    {shop.active ? "Disable" : "Enable"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
