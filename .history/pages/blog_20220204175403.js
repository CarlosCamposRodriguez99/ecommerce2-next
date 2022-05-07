import Layout from '../components/Layout';

const Blog = () => {

  return (
    <Layout
      pagina='Blog'
    >
      <h1>Desde Blog</h1>
    </Layout>


  )
}

export async function getServerSideProps() {

  const url = 'http://localhost:1337/blogs'
  const respuesta = await fetch(url)
  const resultado = await respuesta.json()

  console.log(resultado);


  return {
    props: {

    }
  }
}

export default Blog;