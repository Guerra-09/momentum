import React from 'react';
import Link from 'next/link';
import styles from './hero.module.css';
import { Search } from 'lucide-react';

export default function Hero() { 
  return (
    <div className={styles.heroContainer}>
      <header className={styles.header}>
        <h1 className={styles.logo}>momentum</h1>
        <nav className={styles.nav}>
          <Link href="/github" className={styles.link}>Github</Link>
          <Link href="/about" className={styles.button}>About us</Link>
        </nav>
      </header>

      <div className={styles.textContainer}>
        <h2 className={styles.mainText}>Discover the best photos.</h2>
        <p className={styles.subText}>Boost your creativity.</p>

        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for free photos"
            className={styles.searchInput}
          />
          <Search className={styles.searchIcon} />
        </div>
      </div>
    </div>
  );
}