import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/mapa">Mapa</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
          </nav>

          <p className={styles.copyright}>Todos los derechos son reservados {year} &copy;</p>
          
          <ul className={styles.ul}>
            <li className={styles.list}>
              <i className={styles.iconoInsta} href="/instagram.cpm"></i>
              <i className={styles.iconoFace}></i>
              <i className={styles.iconoWhats}></i>
              <i className={styles.iconoLinke}></i>
            </li>
          </ul>
          
      </div>
    </footer>
  )
}

export default Footer;
