import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';

const Layout = ({children, pagina, guitarra}) => {
  return (
    <div>
      <Head>
        <title>GuitarLA - {pagina}</title>
        <meta name="description" content="Sitio web de venta de guitarras"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,700;1,400&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <Header 
        guitarra={guitarra}
      />

      {children}

      <Footer />
      
    </div>
  )
}

Layout.defaultProps = {
  guitarra: null
}

export default Layout;
