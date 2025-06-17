import React from 'react';
import styles from './hero.module.css' 
import { Search } from 'lucide-react';
import NavBar from '../navigationBar/navigationBar';

export default function Hero() { 
  return (
    <div className={styles.heroContainer}>
      <NavBar />

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