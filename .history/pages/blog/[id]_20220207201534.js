import Image from 'next/image'
import Layout from '../../components/Layout'

const EntradaBlog = ({entrada}) => {

  const { contenido, imagen, published_at, titulo } = entrada

  return (
    <Layout>
      <main className="contenedor">
        <h1 className="heading">{titulo}</h1>
        <article>
          <Imagen layout="responsive" width={800} height={600} src={imagen.url} alt={`Imagen Entrada ${titulo}`} />
        </article>
      
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()
  const paths = entradas.map(entrada => ({
    params: { id: entrada._id.toString() }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params: {id}}) {
  
  const url = `${process.env.API_URL}/blogs/${id}`
  const respuesta = await fetch(url)
  const entrada = await respuesta.json()

  return {
    props: {
      entrada

    }
  }
}



//export async function getServerSideProps({query: {id}}) {

  //const url = `${process.env.API_URL}/blogs/${id}`
  //const respuesta = await fetch(url)
  //const entrada = await respuesta.json()

  //return {
    //props: {
      //entrada

   // }
  //}
//}

export default EntradaBlog
