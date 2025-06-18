'use client'

import React, { useState } from 'react';
import styles from './pictures.module.css';

export default function Pictures({ pictures }) {
  const [selectedImg, setSelectedImg] = useState(null);

  if (!Array.isArray(pictures)) return null;
  return (
    <>
      <div className={styles.masonry}>
        {pictures.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Foto ${idx + 1}`}
            className={styles['masonry-img']}
            onClick={() => setSelectedImg(src)}
          />
        ))}
      </div>
      {selectedImg && (
        <div className={styles.modalOverlay} onClick={() => setSelectedImg(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <img src={selectedImg} alt="Preview" className={styles.modalImg} />
            <button className={styles.closeBtn} onClick={() => setSelectedImg(null)}>&times;</button>
          </div>
        </div>
      )}
    </>
  );
}