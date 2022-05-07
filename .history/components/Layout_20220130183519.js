import Head from 'next/head'

const Layout = ({children, pagina}) => {
  return (
    <div>
      <Head>
        <title>GuitarLA - {pagina}</title>
        <meta descripti

      </Head>

      {children}
      
    </div>
  )
}

export default Layout;
