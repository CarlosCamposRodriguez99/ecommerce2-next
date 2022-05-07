import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';

const Layout = ({children, pagina}) => {
  return (
    <div>
      <Head>
        <title>GuitarLA - {pagina}</title>
        <meta name="description" content="Sitio web de venta de guitarras"/>
        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;600;700&display=swap" rel="stylesheet">

      </Head>

      <Header />

      {children}

      <Footer />
      
    </div>
  )
}

export default Layout;
