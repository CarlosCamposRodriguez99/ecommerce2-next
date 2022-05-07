import Link from 'next/link'
import Image from 'next/image'
import { formatearFecha } from '../helpers'
import styles from '../styles/Entrada.module.css'

const Entrada = ({entrada}) => {
  const { titulo, resumen, imagen, published_at, id } = entrada

  return (
    <article>

      <Image layout='responsive' width={600} height={600} src={imagen.url} alt={`imagen blog ${titulo}`}/>

      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p>{formatearFecha(published_at)}</p>
        <p>{resumen}</p>
        <Link href={`/blog/${id}`}>
          Leer Entrada
        
        </Link>
      </div>
      
    </article>
  )
}

export default Entrada
