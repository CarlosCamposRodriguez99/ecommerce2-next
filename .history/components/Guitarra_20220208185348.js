import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Guitarra.module.css'

const Guitarra = ({guitarra}) => {

  const { descripcion, imagen, nombre, precio, url } = guitarra


  return (
    <div className={styles.guitarra}>
      <Image layout='responsive' width={180} height={350} src={imagen.url} alt={`Imagen Guitarra ${nombre}`} />
      <div>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>${precio}</p>
        <Link href={`/guitarras/${url}`}>
          Ver Producto
        </Link>
      </div>
      
    </div>
  )
}

export default Guitarra
