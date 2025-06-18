import React from 'react';
import styles from './hero.module.css' 
import { Search } from 'lucide-react';
import NavBar from '../navigationBar/navigationBar';

export default function Hero({
  backgroundImage,
  mainText,
  subText,
  showSearch = false,
}) { 
  
  return (
    <div className={styles.heroContainer} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <NavBar />

      <div className={styles.textContainer}>
        <h2 className={styles.mainText}>{mainText}</h2>
        <p className={styles.subText}>{subText}</p>

        {showSearch && (
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search for free photos"
              className={styles.searchInput}/>
            <Search className={styles.searchIcon} />
          </div>
        )}
      </div>
    </div>
  );
}