import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'


export default function Home({guitarras, curso}) {
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

      <Curso
        curso={curso}
      />

    </Layout>

  )
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras`
  const urlCursos = `${process.env.API_URL}/cursos`
  const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`

  const [resGuitarras, resCursos] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog)
  ])

  const [guitarras, curso] = await Promise.all([
    resGuitarras.json(),
    resCursos.json()

  ])
  
  return {
    props: {
      guitarras,
      curso
    }
  }
}

