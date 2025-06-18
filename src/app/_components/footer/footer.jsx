export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2023 Your Company</p>
      <nav style={styles.nav}>
        <a href="/privacy" style={styles.link}>Privacy Policy</a>
        <a href="/terms" style={styles.link}>Terms of Service</a>
      </nav>
    </footer>
  );
}
const styles = {
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    background: '#f5f5f5',
    borderTop: '1px solid #ddd',
  },
  text: {
    marginBottom: '0.5rem',
    color: '#333',
  },
  nav: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    textDecoration: 'none',
    color: '#0070f3',
  },
};
