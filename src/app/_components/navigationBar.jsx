'use client';

import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './navigationBar.module.css';
import Link from 'next/link';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      setShowSearch(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <h1 className={`${styles.logo} ${scrolled ? styles.scrolledLogo : ''}`}>momentum</h1>

        {showSearch && (
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search for free photos"
              className={styles.searchInput}
            />
            <Search className={styles.searchIcon} size={20} />
          </div>
        )}

       <div className={styles.desktopMenu}>
        <Link href="https://github.com/Guerra-09/momentum" target="_blank"
          className={[styles.link, scrolled && styles.scrolledLink].filter(Boolean).join(' ')}
        >Github</Link>
        <Link href="/about-us"
          className={[styles.button, scrolled && styles.scrolledButton].filter(Boolean).join(' ')}
        >About us</Link>
      </div>

        <button onClick={() => setOpen(true)} className={`${styles.iconBtn} ${styles['mobile-only']}`}>
          <Menu color="black" size={28} />
        </button>
      </nav>

      {open && (
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <h2 className={styles.logo}>momentum</h2>
            <button onClick={() => setOpen(false)} className={styles.iconBtn}>
              <X color="black" size={28} />
            </button>
          </div>
          <a href="/about-us" className={styles.link}>About us</a>
          <a href="https://github.com/Guerra-09/momentum" target="_blank" className={styles.link}>Github</a>
        </div>
      )}
    </>
  );
}
