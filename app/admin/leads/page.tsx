import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function LeadsPage() {
const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div style={{ padding: 16, fontFamily: "Arial" }}>
      <h1>Leads</h1>
      <p>Total: {leads.length}</p>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: 12,
          }}
        >
          <thead>
            <tr>
              {["Time", "Name", "Mobile", "Address", "Qty", "Preferred Time"].map(
                (h) => (
                  <th
                    key={h}
                    style={{
                      border: "1px solid #ddd",
                      padding: 8,
                      textAlign: "left",
                      background: "#f5f5f5",
                    }}
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {leads.map((l) => (
              <tr key={l.id}>
                <td style={{ border: "1px solid #ddd", padding: 8 }}>
                  {new Date(l.createdAt).toLocaleString()}
                </td>
                <td style={{ border: "1px solid #ddd", padding: 8 }}>{l.name}</td>
                <td style={{ border: "1px solid #ddd", padding: 8 }}>
                  <a href={`tel:${l.mobile}`}>{l.mobile}</a>
                </td>
                <td style={{ border: "1px solid #ddd", padding: 8 }}>
                  {l.address}
                </td>
                <td style={{ border: "1px solid #ddd", padding: 8 }}>
                  {l.quantity}
                </td>
                <td style={{ border: "1px solid #ddd", padding: 8 }}>{l.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
