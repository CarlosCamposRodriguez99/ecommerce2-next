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

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras?_sort=precio:desc`
  const respuesta = await fetch(url)
  const guitarras = await respuesta.json()

  const urlGuitarras = `${process.env.API_URL}/guitarras`
  const urlCursos = `${process.env.API_URL}/cursos`

  const [] = await Promise
  
  return {
    props: {
      guitarras
    }
  }
}

