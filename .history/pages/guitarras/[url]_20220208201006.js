import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Guitarra.module.css'

const Producto = ({guitarra}) => {

  const {descripcion, imagen, nombre, precio} = guitarra[0]

  return (
    <div>
      <h1>Desde producto</h1>
      
    </div>
  )
}

export async function getServerSideProps({query: {url}}) {

  const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
  const respuesta = await fetch(urlGuitarra)
  const guitarra = await respuesta.json()

  return {
    props: {
      guitarra

    }
  }
}

export default Producto
