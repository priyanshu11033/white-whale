import prisma from "@/lib/prisma";
import { addMenuItem, deleteMenuItem } from "./actions";

export const dynamic = "force-dynamic";

export default async function ManageMenu() {
  const items = await prisma.menuItem.findMany({ orderBy: { category: 'asc' } });

  return (
    <>
      <h1 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>Manage Menu</h1>

      <div style={{ background: 'white', padding: '20px', borderRadius: '4px', marginBottom: '40px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Add New Item</h2>
        <form action={addMenuItem} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <input name="name" placeholder="Item Name" required style={{ padding: '10px', border: '1px solid var(--gray-light)' }} />
          <input name="price" type="number" step="0.01" placeholder="Price" required style={{ padding: '10px', border: '1px solid var(--gray-light)' }} />
          <select name="category" required style={{ padding: '10px', border: '1px solid var(--gray-light)' }}>
            <option value="">Select Category</option>
            <option value="STARTERS">STARTERS</option>
            <option value="MAIN COURSES">MAIN COURSES</option>
            <option value="DESSERTS">DESSERTS</option>
            <option value="DRINKS">DRINKS</option>
          </select>
          <input name="imageUrl" placeholder="Image URL (optional)" style={{ padding: '10px', border: '1px solid var(--gray-light)' }} />
          <textarea name="description" placeholder="Description" required style={{ gridColumn: '1 / -1', padding: '10px', border: '1px solid var(--gray-light)' }}></textarea>
          <button type="submit" className="btn-primary" style={{ gridColumn: '1 / -1' }}>Add Menu Item</button>
        </form>
      </div>

      <div style={{ background: 'white', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: 'var(--bg-light)', textAlign: 'left' }}>
              <th style={{ padding: '15px' }}>Name</th>
              <th style={{ padding: '15px' }}>Category</th>
              <th style={{ padding: '15px' }}>Price</th>
              <th style={{ padding: '15px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id} style={{ borderTop: '1px solid var(--gray-light)' }}>
                <td style={{ padding: '15px' }}>{item.name}</td>
                <td style={{ padding: '15px' }}>{item.category}</td>
                <td style={{ padding: '15px' }}>${item.price.toFixed(2)}</td>
                <td style={{ padding: '15px' }}>
                  <form action={async () => { "use server"; await deleteMenuItem(item.id); }}>
                    <button type="submit" style={{ color: 'red', textDecoration: 'underline' }}>Delete</button>
                  </form>
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr><td colSpan={4} style={{ padding: '15px', textAlign: 'center' }}>No items found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
