
const EntradaBlog = () => {

  return (
    <div>
      <h1>Desde entradablog</h1>
      
    </div>
  )
}

export async function getServerSideProps({query: {id}}) {
  
  const url = `http://localhost:1337/blogs/${id}`
  console.log(url)
  const respuesta = await fetch(url)
  const entrada = await respuesta.json()
  console.log(id)

  return {
    props: {

    }
  }
}

export default EntradaBlog
