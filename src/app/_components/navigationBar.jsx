'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import styles from './navigationBar.module.css';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <h2 className={styles.logo}>momentum</h2>

        <div className={styles['desktop-menu']}>
          <a href="https://github.com/Guerra-09/momentum" target="_blank" className={styles.link}>Github</a>
          <a href="/about-us" className={`${styles.link} ${styles['link-button']}`}>About us</a>
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
