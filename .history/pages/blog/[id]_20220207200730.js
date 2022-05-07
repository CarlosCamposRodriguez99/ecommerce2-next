
const EntradaBlog = ({entrada}) => {

  const { contenido, imagen, published_at, titulo } = entrada

  return (
    <main className>
      <h1>{titulo}</h1>
      
    </main>
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
