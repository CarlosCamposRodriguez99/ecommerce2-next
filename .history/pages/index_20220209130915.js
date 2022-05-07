import Layout from '../components/Layout'
import Listado from '../components/Listado'


export default function Home() {
  return (
  
    <Layout
      pagina='Inicio'
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>
        <Listado />
      </main>

    </Layout>

  )
}
