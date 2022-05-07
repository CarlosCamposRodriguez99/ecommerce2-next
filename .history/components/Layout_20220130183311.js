import Head from 'next/head'

const Layout = ({children, pa}) => {
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
