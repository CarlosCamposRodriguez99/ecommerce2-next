import { useEffect } from 'react';
import Layout from '../components/Layout';

const Blog = () => {

  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'http://localhost:1337/blogs'
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      console.log(res)

    }
    consultarAPI();

  }, [])



  return (
    <Layout
      pagina='Blog'
    >
      <h1>Desde Blog</h1>
    </Layout>


  )
}

export default Blog;