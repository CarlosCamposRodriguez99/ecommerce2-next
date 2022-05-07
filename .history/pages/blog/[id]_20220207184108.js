
const EntradaBlog = ({entrada}) => {
  console.log(entrada)

  return (
    <div>
      <h1>Desde entradablog</h1>
      
    </div>
  )
}

export async function getStaticPaths() {
  const url = 'http://localhost:1337/blogs'
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
  
  const url = `${process.env.}/blogs/${id}`
  const respuesta = await fetch(url)
  const entrada = await respuesta.json()

  return {
    props: {
      entrada

    }
  }
}



//export async function getServerSideProps({query: {id}}) {
  
  ///const url = `http://localhost:1337/blogs/${id}`
  //console.log(url)
  //const respuesta = await fetch(url)
  //const entrada = await respuesta.json()

  //return {
    //props: {
      //entrada

   // }
  //}
//}

export default EntradaBlog
