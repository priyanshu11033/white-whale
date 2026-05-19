import prisma from "@/lib/prisma";
import styles from "./layout.module.css";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const messageCount = await prisma.contactMessage.count();
  const menuCount = await prisma.menuItem.count();
  const blogCount = await prisma.blogPost.count();
  
  const recentMessages = await prisma.contactMessage.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' }
  });

  return (
    <>
      <h1 className={styles.adminTitle}>Dashboard</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }}>
        <div style={{ background: 'white', padding: '20px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: 'var(--text-dark)', marginBottom: '10px' }}>Total Menu Items</h3>
          <div style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 'bold' }}>{menuCount}</div>
        </div>
        <div style={{ background: 'white', padding: '20px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: 'var(--text-dark)', marginBottom: '10px' }}>Total Blog Posts</h3>
          <div style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 'bold' }}>{blogCount}</div>
        </div>
        <div style={{ background: 'white', padding: '20px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: 'var(--text-dark)', marginBottom: '10px' }}>Total Messages</h3>
          <div style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 'bold' }}>{messageCount}</div>
        </div>
      </div>

      <h2 className={styles.adminTitle} style={{ fontSize: '1.5rem' }}>Recent Messages</h2>
      <div style={{ background: 'white', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: 'var(--bg-light)', textAlign: 'left' }}>
              <th style={{ padding: '15px' }}>Date</th>
              <th style={{ padding: '15px' }}>Name</th>
              <th style={{ padding: '15px' }}>Email</th>
              <th style={{ padding: '15px' }}>Message</th>
            </tr>
          </thead>
          <tbody>
            {recentMessages.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ padding: '15px', textAlign: 'center', color: 'var(--text-dark)' }}>No messages yet.</td>
              </tr>
            ) : (
              recentMessages.map(msg => (
                <tr key={msg.id} style={{ borderTop: '1px solid var(--gray-light)' }}>
                  <td style={{ padding: '15px' }}>{new Date(msg.createdAt).toLocaleDateString()}</td>
                  <td style={{ padding: '15px' }}>{msg.name}</td>
                  <td style={{ padding: '15px' }}>{msg.email}</td>
                  <td style={{ padding: '15px' }}>{msg.message.substring(0, 50)}...</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
