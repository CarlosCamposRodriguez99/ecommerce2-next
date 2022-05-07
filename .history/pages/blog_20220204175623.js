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
  const entradas = await respuesta.json()

  console.log(e);


  return {
    props: {

    }
  }
}

export default Blog;