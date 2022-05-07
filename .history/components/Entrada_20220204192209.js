import { formatearFecha } from '../helpers'

const Entrada = ({entrada}) => {
  const { titulo, resumen, imagen, published_at, id } = entrada
  return (
    <article>

      <div>
        <h1>{titulo}</h1>
        <p>{formatearFecha}</p>
      </div>
      
    </article>
  )
}

export default Entrada
