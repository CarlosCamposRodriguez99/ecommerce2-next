import Layout from '../components/Layout';

const Blog = ({entradas}) => {
  console.log(entradas);

  return (
    <Layout
      pagina='Blog'
    >
      <main className="contenedor">
        <h2 className='heading'></h2>
      </main>
    </Layout>


  )
}

export async function getStaticProps() {

  const url = 'http://localhost:1337/blogs'
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()


  return {
    props: {
      entradas

    }
  }
}

export default Blog;