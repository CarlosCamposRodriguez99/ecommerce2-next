import Layout from '../components/Layout'
import Listado from '../components/Listado'


export default function Home({guitarras}) {
  return (
  
    <Layout
      pagina='Inicio'
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>
        <Listado 
           guitarras={guitarras}
        />
      </main>

    </Layout>

  )
}
