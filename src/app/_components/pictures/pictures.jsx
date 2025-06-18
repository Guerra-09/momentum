'use client'

import React, { useState, useEffect } from 'react';
import styles from './pictures.module.css';

const API_URL = 'https://api.pexels.com/v1/curated?per_page=20';
const ENV = process.env.NEXT_PUBLIC_ENV;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function Pictures() {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    async function fetchPhotos() {
      setLoading(true);
      setError(null);
      try {
        if (ENV === 'development') {
          // Usar mocks en desarrollo
          const mock = await import('../../../../mocks/images.mock');
          setPictures(mock.default.IMAGES_MOCK);
        } else {
          // Usar API en producción
          const res = await fetch(API_URL, {
            headers: {
              Authorization: API_KEY,
            },
          });
          if (!res.ok) throw new Error('Error al obtener fotos');
          const data = await res.json();
          setPictures(data.photos.map(photo => photo.src.large));
        }
      } catch (err) {
        setError('No se pudieron cargar las fotos.');
        console.error('Error fetching photos:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos();
  }, []);

  if (loading) return <div style={{textAlign: 'center', padding: '2rem'}}>Cargando fotos...</div>;
  if (error) return <div style={{color: 'red', textAlign: 'center', padding: '2rem'}}>{error}</div>;
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
