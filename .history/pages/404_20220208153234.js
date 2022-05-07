import Link from 'next/link'
import styles from '../styles/NoEncontrado.module.css'

const NoEncontrado = () => {
  return (
    <div>
      <div>
        <h1 className="heading">Página no Encontrada</h1>
      
      <Link href="/">Volver al Inicio</Link>

      </div>
      
      
    </div>
  )
}

export default NoEncontrado
