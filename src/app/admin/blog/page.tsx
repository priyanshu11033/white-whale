import prisma from "@/lib/prisma";
import { addBlogPost, deleteBlogPost } from "./actions";

export const dynamic = "force-dynamic";

export default async function ManageBlog() {
  const posts = await prisma.blogPost.findMany({ orderBy: { date: 'desc' } });

  return (
    <>
      <h1 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '20px' }}>Manage Blog</h1>

      <div style={{ background: 'white', padding: '20px', borderRadius: '4px', marginBottom: '40px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Add New Post</h2>
        <form action={addBlogPost} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <input name="title" placeholder="Post Title" required style={{ gridColumn: '1 / -1', padding: '10px', border: '1px solid var(--gray-light)' }} />
          <input name="imageUrl" placeholder="Image URL (optional)" style={{ gridColumn: '1 / -1', padding: '10px', border: '1px solid var(--gray-light)' }} />
          <textarea name="content" placeholder="Post Content" required style={{ gridColumn: '1 / -1', padding: '10px', border: '1px solid var(--gray-light)', minHeight: '150px' }}></textarea>
          <button type="submit" className="btn-primary" style={{ gridColumn: '1 / -1' }}>Publish Post</button>
        </form>
      </div>

      <div style={{ background: 'white', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: 'var(--bg-light)', textAlign: 'left' }}>
              <th style={{ padding: '15px' }}>Date</th>
              <th style={{ padding: '15px' }}>Title</th>
              <th style={{ padding: '15px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id} style={{ borderTop: '1px solid var(--gray-light)' }}>
                <td style={{ padding: '15px' }}>{new Date(post.date).toLocaleDateString()}</td>
                <td style={{ padding: '15px' }}>{post.title}</td>
                <td style={{ padding: '15px' }}>
                  <form action={async () => { "use server"; await deleteBlogPost(post.id); }}>
                    <button type="submit" style={{ color: 'red', textDecoration: 'underline' }}>Delete</button>
                  </form>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr><td colSpan={3} style={{ padding: '15px', textAlign: 'center' }}>No posts found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
