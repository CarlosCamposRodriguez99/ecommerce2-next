import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div className="contenedor">
          <nav className="">
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
          </nav>

          <icon>
            <p>Todos los derechos reservados</p>
          </icon>
      </div>
    </footer>
  )
}

export default Footer
