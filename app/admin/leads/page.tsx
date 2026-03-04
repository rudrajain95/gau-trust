export const dynamic = "force-dynamic";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export default async function LeadsPage() {

  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
  });

  async function deleteLead(id: string) {
    "use server";

    await prisma.lead.delete({
      where: { id },
    });

    revalidatePath("/admin");
  }

  async function updateStatus(id: string, status: string) {
    "use server";

    await prisma.lead.update({
      where: { id },
      data: { status },
    });

    revalidatePath("/admin");
  }

  return (
    <div style={{ padding: 16, fontFamily: "Arial" }}>
      <h1>Gau Trust Milk - Leads</h1>
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
              {[
                "Time",
                "Name",
                "Mobile",
                "Address",
                "Qty",
                "Preferred Time",
                "Status",
                "Delete",
              ].map((h) => (
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
              ))}
            </tr>
          </thead>

          <tbody>
            {leads.map((l) => (
              <tr key={l.id}>
                <td style={{ border: "1px solid #ddd", padding: 8 }}>
                  {new Date(l.createdAt).toLocaleString()}
                </td>

                <td style={{ border: "1px solid #ddd", padding: 8 }}>
                  {l.name}
                </td>

                <td style={{ border: "1px solid #ddd", padding: 8 }}>
                  <a href={`tel:${l.mobile}`}>{l.mobile}</a>
                </td>

                <td style={{ border: "1px solid #ddd", padding: 8 }}>
                  {l.address}
                </td>

                <td style={{ border: "1px solid #ddd", padding: 8 }}>
                  {l.quantity}
                </td>

                <td style={{ border: "1px solid #ddd", padding: 8 }}>
                  {l.time}
                </td>

                <td style={{ border: "1px solid #ddd", padding: 8 }}>
                  <form action={updateStatus.bind(null, l.id, "Trial")} style={{ display: "inline" }}>
                    <button>Trial</button>
                  </form>

                  <form action={updateStatus.bind(null, l.id, "Active")} style={{ display: "inline", marginLeft: 5 }}>
                    <button style={{ background: "green", color: "white" }}>
                      Active
                    </button>
                  </form>

                  <form action={updateStatus.bind(null, l.id, "Cancelled")} style={{ display: "inline", marginLeft: 5 }}>
                    <button style={{ background: "gray", color: "white" }}>
                      Cancel
                    </button>
                  </form>
                </td>

                <td style={{ border: "1px solid #ddd", padding: 8 }}>
                  <form action={deleteLead.bind(null, l.id)}>
                    <button
                      style={{
                        background: "red",
                        color: "white",
                        border: "none",
                        padding: "6px 10px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
