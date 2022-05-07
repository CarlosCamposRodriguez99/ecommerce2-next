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


  return {
    props: {

    }
  }
}

export default Blog;