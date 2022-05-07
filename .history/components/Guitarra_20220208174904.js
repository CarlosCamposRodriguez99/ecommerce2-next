import Image from 'next/image'
import Link from 'next/link'

const Guitarra = ({guitarra}) => {

  const { descripcion, imagen, nombre, precio, url } = guitarra


  return (
    <div>
      <Image layout='responsive' width={400} height={250} src={imagen.url} alt={`Imagen Guitarra ${nombre}`} />
      <div>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>${precio}</p>
        <Link href={}></Link>
      </div>
      
    </div>
  )
}

export default Guitarra
