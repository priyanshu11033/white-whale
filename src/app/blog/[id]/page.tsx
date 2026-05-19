import prisma from "@/lib/prisma";
import styles from "./page.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogPostDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id, 10);

  if (isNaN(id)) {
    notFound();
  }

  const post = await prisma.blogPost.findUnique({
    where: { id },
  });

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.date}>
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          {post.imageUrl && (
            <img src={post.imageUrl} alt={post.title} className={styles.image} />
          )}
          
          <div className={styles.text}>
            {post.content.split('\n').map((paragraph, idx) => (
              <p key={idx} style={{ marginBottom: '1.5rem' }}>{paragraph}</p>
            ))}
          </div>
          
          <Link href="/blog" className={styles.backButton}>
            ← Back to Blog
          </Link>
        </div>
      </section>
    </>
  );
}
