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
              <a
                className={styles.iconoInsta}
                href="https://www.instagram.com/"
              ></a>
              <a 
                className={styles.iconoFace}
                href="https://www.facebook.com/"
              ></a>
              <a 
                className={styles.iconoWhats}
                href=""
              ></a>
              <a 
                className={styles.iconoLinke}
              ></a>
            </li>
          </ul>
          
      </div>
    </footer>
  )
}

export default Footer;
