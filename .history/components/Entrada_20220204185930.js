

const Entrada = ({entrada}) => {
  const { titulo, resumen, imagen, published_at, id } = entrada
  return (
    <article>

      <div>
        <h1>{titulo}</h1>
      
      </div>
      
    </article>
  )
}

export default Entrada
