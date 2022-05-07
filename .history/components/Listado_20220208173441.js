import Guitarra from './Guitarra'

const Listado = ({guitarras}) => {
  return (
    <div>
        {guitarras.map( guitarra => ())}
    </div>
  )
}

export default Listado
