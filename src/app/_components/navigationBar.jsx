// components/NavBar.jsx
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav style={styles.nav}>
      <Link href="/" style={styles.link}>Home</Link>
      <Link href="/about" style={styles.link}>About</Link>
      <Link href="/contact" style={styles.link}>Contact</Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    gap: '1rem',
    padding: '1rem',
    background: '#f5f5f5',
    borderBottom: '1px solid #ddd',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  },
};
