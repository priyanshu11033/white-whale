import prisma from "@/lib/prisma";
import styles from "./page.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";

export default async function MenuItemDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id, 10);

  if (isNaN(id)) {
    notFound();
  }

  const item = await prisma.menuItem.findUnique({
    where: { id },
  });

  if (!item) {
    notFound();
  }

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.title}>{item.name}</h1>
        </div>
      </section>

      <section className={styles.detailsSection}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            {item.imageUrl ? (
              <img src={item.imageUrl} alt={item.name} className={styles.image} />
            ) : (
              <div className={styles.image} style={{ backgroundColor: 'var(--gray-light)' }}></div>
            )}
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.category}>{item.category}</div>
            <h2 className={styles.name}>{item.name}</h2>
            <div className={styles.price}>${item.price.toFixed(2)}</div>
            <p className={styles.description}>{item.description}</p>
            
            <div style={{ marginBottom: '40px' }}>
              <AddToCartButton item={{ id: item.id, name: item.name, price: item.price, imageUrl: item.imageUrl }} showQuantity={true} />
            </div>

            <Link href="/menu" className={styles.backButton}>
              ← Back to Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
