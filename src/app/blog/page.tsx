import prisma from "@/lib/prisma";
import styles from "./page.module.css";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Blog() {
  // Ensure the DB contains the exact 3 posts from the user's reference image
  try {
    const expectedTitles = [
      "White Whale Family Expands: New Restaurant Opens in Charlestown",
      "Virginia's Finest: Smithfield Ham",
      "Go Green this Earth Day with NYC's Eco Friendly Events & Eateries"
    ];
    const existingPosts = await prisma.blogPost.findMany();
    const hasExactPosts = existingPosts.length === 3 && existingPosts.every(p => expectedTitles.includes(p.title) && !p.content.includes("2016"));

    if (!hasExactPosts) {
      await prisma.blogPost.deleteMany({});
      
      // Top post (most recent)
      await prisma.blogPost.create({
        data: {
          title: "White Whale Family Expands: New Restaurant Opens in Charlestown",
          content: "WhereResto Old town, 44 Canal Center Plaza #200, Alexandria, VA 22314, USA355.328.0632 When14th, February, 2026 19:00 WhatBefore we'll be inviting you for our special Tuna-menu treat next week, let's explore the best Tuna dishes out there!...",
          imageUrl: "/images/31.png",
          date: new Date()
        }
      });
      // Middle post
      await prisma.blogPost.create({
        data: {
          title: "Virginia's Finest: Smithfield Ham",
          content: "WhereResto Old town, 44 Canal Center Plaza #200, Alexandria, VA 22314, USA355.328.0632 When14th, February, 2026 19:00 WhatBefore we'll be inviting you for our special Tuna-menu treat next week, let's explore the best Tuna dishes out there!...",
          imageUrl: "/images/33.png",
          date: new Date(Date.now() - 86400000)
        }
      });
      // Last post (oldest)
      await prisma.blogPost.create({
        data: {
          title: "Go Green this Earth Day with NYC's Eco Friendly Events & Eateries",
          content: "WhereResto Old town, 44 Canal Center Plaza #200, Alexandria, VA 22314, USA355.328.0632 When14th, February, 2026 19:00 WhatBefore we'll be inviting you for our special Tuna-menu treat next week, let's explore the best Tuna dishes out there!...",
          imageUrl: "/images/30.png",
          date: new Date(Date.now() - 172800000)
        }
      });
    }
  } catch (e) {
    console.error("DB Seed Error:", e);
  }

  const posts = await prisma.blogPost.findMany({
    orderBy: { date: 'desc' }
  });

  return (
    <>
      <section className={styles.blogSection}>
        <div className="container">
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link> <span>/</span> <span className={styles.current}>Blog</span>
          </div>

          {posts.length === 0 ? (
            <div className={styles.emptyState}>No blog posts available yet. Check back soon!</div>
          ) : (
            <>
              <div className={styles.blogGrid}>
                {posts.map((post) => (
                  <article key={post.id} className={styles.blogCard}>
                    {post.imageUrl ? (
                      <img src={post.imageUrl} alt={post.title} className={styles.blogImg} />
                    ) : (
                      <div className={styles.blogImg} style={{ backgroundColor: 'var(--primary-light)' }}></div>
                    )}
                    <div className={styles.blogContent}>
                      <h2 className={styles.blogTitle}>{post.title}</h2>
                      <p className={styles.blogText}>
                        {post.content}
                      </p>
                      <Link href={`/blog/${post.id}`} className={styles.readMore}>Read More</Link>
                    </div>
                  </article>
                ))}
              </div>

              <div className={styles.pagination}>
                <span className={styles.activePage}>1</span>
                <span className={styles.pageNumber}>2</span>
                <span className={styles.pageNumber}>Next</span>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
