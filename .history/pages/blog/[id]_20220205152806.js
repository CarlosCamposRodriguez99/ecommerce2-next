
const EntradaBlog = () => {

  return (
    <div>
      <h1>Desde entradablog</h1>
      
    </div>
  )
}

export async function getServerSideProps({query: {id}}) {

  return {
    props: {

    }
  }
}

export default EntradaBlog
