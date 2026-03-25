"use client";

import { useEffect, useState } from "react";

export default function AdminDeliveryPage() {
  const [list, setList] = useState<any[]>([]);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    area: ""
  });

  const [msg, setMsg] = useState("");

  useEffect(() => {
    const admin = localStorage.getItem("adminLogin");

    if (!admin) {
      window.location.href = "/admin/login";
      return;
    }

    load();
  }, []);

  const load = async () => {
    const res = await fetch("/api/admin/delivery/list");
    const data = await res.json();
    setList(data);
  };

  const add = async () => {
    const res = await fetch("/api/admin/delivery/add", {
      method: "POST",
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (data.success) {
      setMsg("✅ Created | Password: " + data.defaultPassword);
      setForm({ name: "", mobile: "", area: "" });
      load();
    } else {
      setMsg("❌ " + data.message);
    }
  };

  const toggle = async (u: any) => {
    await fetch("/api/admin/delivery/toggle", {
      method: "POST",
      body: JSON.stringify({
        id: u.id,
        active: !u.active
      })
    });

    load();
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Delivery Partners</h1>

      <div className="card" style={{ maxWidth: 400 }}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <br /><br />

        <input
          placeholder="Mobile"
          value={form.mobile}
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
        />

        <br /><br />

        <input
          placeholder="Area"
          value={form.area}
          onChange={(e) => setForm({ ...form, area: e.target.value })}
        />

        <br /><br />

        <button className="primary-btn" onClick={add}>
          Add Delivery Boy
        </button>

        <p>{msg}</p>
      </div>

      <div className="card" style={{ marginTop: 30 }}>
        <h3>All Delivery Boys</h3>

        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Area</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {list.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.mobile}</td>
                <td>{u.area || "-"}</td>
                <td>{u.active ? "🟢 Active" : "🔴 Disabled"}</td>
                <td>
                  <button
                    className="secondary-btn"
                    onClick={() => toggle(u)}
                  >
                    {u.active ? "Disable" : "Enable"}
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
