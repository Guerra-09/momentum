'use client';

import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './navigationBar.module.css';
import Link from 'next/link';

export default function NavBar() {
  const [open, setOpen] = useState(false); // State to manage the sidebar visibility
  const [scrolled, setScrolled] = useState(false); // Check if the user has scrolled down the page

  useEffect(() => { 
    const handleScroll = () => { 
      const isScrolled = window.scrollY > 50; // Change 50 to the number of pixels you want to scroll before changing the style
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <h1 className={`${styles.logo} ${scrolled ? styles.scrolledLogo : ''}`}>momentum</h1>

       <div className={styles.desktopMenu}>
        <Link href="https://github.com/Guerra-09/momentum" target="_blank"
          className={[styles.link, scrolled && styles.scrolledLink].filter(Boolean).join(' ')}>Github</Link>
        <Link href="/about-us"
          className={[styles.button, scrolled && styles.scrolledButton].filter(Boolean).join(' ')}>About us</Link>
      </div>

        <button onClick={() => setOpen(true)} className={`${styles.iconBtn} ${styles['mobile-only']}`}>
          <Menu color="white" size={28} />
        </button>
      </nav>

      {open && (
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <h2 className={styles.sidebarLogo}>momentum</h2>
            <button onClick={() => setOpen(false)} className={styles.iconBtn}>
              <X color="black" size={28} />
            </button>
          </div>
          <a href="/about-us" className={styles.sidebarLink}>About us</a>
          <a href="https://github.com/Guerra-09/momentum" target="_blank" className={styles.sidebarLink}>Github</a>
        </div>
      )}
    </>
  );
}
