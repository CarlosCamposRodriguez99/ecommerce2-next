import Guitarra from './Guitarra'
import styles from '..'

const Listado = ({guitarras}) => {
  return (
    <div>
        {guitarras.map( guitarra => (
            <Guitarra 
              key={guitarra.url}
              guitarra={guitarra}
            />
        ))}
    </div>
  )
}

export default Listado
