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
            <Link href= className={styles.iconoInsta}></i>
            <i className={styles.iconoFace}></i>
            <i className={styles.iconoWhats}></i>
            <i className={styles.iconoLinke}></i>
            </a>
            </li>
          </ul>
          
      </div>
    </footer>
  )
}

export default Footer;
