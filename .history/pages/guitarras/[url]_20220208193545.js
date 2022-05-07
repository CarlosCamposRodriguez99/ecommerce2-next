

const Producto = () => {
  return (
    <div>
      <h1>Desde producto</h1>
      
    </div>
  )
}

export async function getServerSideProps({query: {url}}) {

  const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
  const respuesta = await fetch(urlGuitarra)

  return {
    props: {

    }
  }
}

export default Producto
