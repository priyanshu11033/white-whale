import Link from "next/link";
import styles from "./layout.module.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.adminContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>White Whale Admin</div>
        <nav className={styles.nav}>
          <Link href="/admin" className={styles.navLink}>Dashboard</Link>
          <Link href="/admin/menu" className={styles.navLink}>Manage Menu</Link>
          <Link href="/admin/blog" className={styles.navLink}>Manage Blog</Link>
          <Link href="/admin/orders" className={styles.navLink}>Manage Orders</Link>
        </nav>
      </aside>
      <div className={styles.mainContent}>
        <header className={styles.topbar}>
          <Link href="/" className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.8rem" }}>
            View Public Site
          </Link>
        </header>
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  );
}
