import Link from ''

const Footer = () => {
  return (
    <footer>
      <div className="contenedor">
          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
          </nav>
      </div>
    </footer>
  )
}

export default Footer
