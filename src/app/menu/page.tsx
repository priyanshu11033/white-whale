import prisma from "@/lib/prisma";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";

// Make the page dynamic so it fetches the latest menu items
export const dynamic = "force-dynamic";

export default async function Menu() {
  const items = await prisma.menuItem.findMany({
    orderBy: { createdAt: 'asc' }
  });

  // Group by category
  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof items>);

  const categories = Object.keys(groupedItems);

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.title}>Our Menu</h1>
        </div>
      </section>

      {categories.length > 0 && (
        <div className={styles.menuNav}>
          {categories.map((cat) => (
            <a key={cat} href={`#${cat}`} className={styles.menuNavLink}>
              {cat}
            </a>
          ))}
        </div>
      )}

      {categories.length === 0 ? (
        <div className={styles.emptyState}>
          Menu items will appear here once added in the Admin Panel.
        </div>
      ) : (
        <div className={styles.menuSection}>
          <div className="container">
            {categories.map((category) => (
              <div key={category} id={category} style={{ marginBottom: "80px" }}>
                <h2 className={styles.categoryTitle}>{category}</h2>
                <div className={styles.menuGrid}>
                  {groupedItems[category].map((item) => (
                    <Link href={`/menu/${item.id}`} key={item.id} className={styles.menuItem}>
                      {item.imageUrl ? (
                        <img src={item.imageUrl} alt={item.name} className={styles.menuItemImg} />
                      ) : (
                        <div className={styles.menuItemImg} style={{ backgroundColor: 'var(--gray-light)' }}></div>
                      )}
                      <div className={styles.menuItemContent}>
                        <div className={styles.menuItemHeader}>
                          <span className={styles.menuItemName}>{item.name}</span>
                          <span className={styles.menuItemPrice}>${item.price.toFixed(2)}</span>
                        </div>
                        <p className={styles.menuItemDesc}>{item.description}</p>
                        <AddToCartButton item={{ id: item.id, name: item.name, price: item.price, imageUrl: item.imageUrl }} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
