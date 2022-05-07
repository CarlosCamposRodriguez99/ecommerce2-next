import Head from 'next/head'

const Layout = ({children, pagina}) => {
  return (
    <div>
      <Head>
        <title>GuitarLA</title>

      </Head>

      {children}
      
    </div>
  )
}

export default Layout;
