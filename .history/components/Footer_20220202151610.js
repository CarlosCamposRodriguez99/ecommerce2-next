import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenedor}`}>
          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
          </nav>

          <p className={styles.copyright}>Todos los derechos son reservados</p>
          
          <ul>
            <li className={styles.list}>
              <a>
                  <Link href="/https://www.instagram.com/" className={styles.iconoInsta}></Link>
              <Link href="/https://www.facebook.com/" className={styles.iconoFace}></Link>
              <Link href="/https://web.whatsapp.com/" className={styles.iconoWhats}></Link>
              <Link href="/https://www.linkedin.com/" className={styles.iconoLinke}></Link>
              </a>
            </li>
          </ul>
          
      </div>
    </footer>
  )
}

export default Footer;
