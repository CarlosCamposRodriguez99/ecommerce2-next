import Link from 'next/link'
import Image from 'next/image'
import styles from "../styles/Header.module.css"

const Header = ({guitarra}) => {
  return (
      <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <Link href="/">
            <a><Image 
              width={300} 
              height={100} 
              src="/img/logo.svg" 
              alt="Imagen logo" />
            </a>
          </Link>
  

          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
          </nav>
        </div>

        {guitarra && (
          <div className>
            <h1>Modelo {guitarra.nombre}</h1>
            <p>{guitarra.descripcion}</p>
            <p>${guitarra.precio}</p>
            <Link href={`/guitarras/${guitarra.url}`}>
              <a>
                  Ver Producto
              </a>
            </Link>
          </div>
        )}


      </div>
      </header>
  )
}

export default Header;
