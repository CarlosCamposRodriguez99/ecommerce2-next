import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        
      </Head>


      <h1>Desde layout</h1>
      {children}
      
    </div>
  )
}

export default Layout;
