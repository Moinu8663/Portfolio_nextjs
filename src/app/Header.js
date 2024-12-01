import Link from "next/link";
export default function Header() {
    return(
        <header style={styles.header}>
        <h1>Poert Folio</h1>
        <nav>
        <Link href="/" style={styles.link}>
          Home
        </Link>
        <Link href="/about" style={styles.link}>
          About
        </Link>
        <Link href="/contact" style={styles.link}>
          Contact
        </Link>
      </nav>
    </header>
    )
}
const styles = {
    header: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px',
    },
    link: {
        margin: '0 10px',
        color: '#fff',
        textDecoration: 'none',
    },
};