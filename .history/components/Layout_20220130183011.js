import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <div>
      <h1>Desde layout</h1>
      {children}
      
    </div>
  )
}

export default Layout;
