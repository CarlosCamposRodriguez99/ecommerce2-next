import Image from 'next/image'
import Link from 'next/link'

const Guitarra = ({guitarra}) => {

  const { descripcion, imagen, nombre, precio, url } = guitarra


  return (
    <div>
      <Image layout='responsive' width={400} height={250} src={imagen.url} alt={`Imagen Guitarra ${nombre}`} />
      <div></div>
      
    </div>
  )
}

export default Guitarra
