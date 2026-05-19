"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path ? styles.active : "";

  return (
    <header>
      <div className={styles.topbar}>
        <div className={`container ${styles.topbarContainer}`}>
          <div className={styles.topbarItem}>
            <span>📍 APR Complex, Nadaun, Hamirpur (H.P) 177301</span>
          </div>
          <div className={styles.topbarItem}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
              8580910105
            </span>
          </div>
          <div className={styles.topbarItem}>
            <span>🕒 Mon-Sun: 10:00 AM - 11:00 PM</span>
          </div>
        </div>
      </div>
      <nav className={styles.navbar}>
        <div className={`container ${styles.navContainer}`}>
          <Link href="/" className={styles.logo}>
            <div>
              <div>WHITE WHALE</div>
              <div className={styles.logoSubtitle}>seafood & shrimps</div>
            </div>
          </Link>
          
          <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </button>

          <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
            <li><Link href="/" className={`${styles.navLink} ${isActive("/")}`} onClick={() => setMenuOpen(false)}>HOME</Link></li>
            <li><Link href="/about" className={`${styles.navLink} ${isActive("/about")}`} onClick={() => setMenuOpen(false)}>ABOUT</Link></li>
            <li><Link href="/menu" className={`${styles.navLink} ${isActive("/menu")}`} onClick={() => setMenuOpen(false)}>MENU</Link></li>
            <li><Link href="/services" className={`${styles.navLink} ${isActive("/services")}`} onClick={() => setMenuOpen(false)}>SERVICES</Link></li>
            <li><Link href="/blog" className={`${styles.navLink} ${isActive("/blog")}`} onClick={() => setMenuOpen(false)}>BLOG</Link></li>
            <li><Link href="/contact" className={`${styles.navLink} ${isActive("/contact")}`} onClick={() => setMenuOpen(false)}>CONTACT US</Link></li>
            <li>
              <Link href="/cart" className={`${styles.navLink} ${styles.cartIcon}`} onClick={() => setMenuOpen(false)}>
                🛒 
                {totalItems > 0 && <span className={styles.cartBadge}>{totalItems}</span>}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
