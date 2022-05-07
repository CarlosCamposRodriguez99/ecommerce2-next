import Link from 'next/link'
import styles from '../styles/'

const NoEncontrado = () => {
  return (
    <div>
      <h1 className="heading">Página no Encontrada</h1>
      
      <Link href="/">Volver al Inicio</Link>
      
    </div>
  )
}

export default NoEncontrado
