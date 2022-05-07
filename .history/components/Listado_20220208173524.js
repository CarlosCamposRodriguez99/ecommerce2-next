import Guitarra from './Guitarra'

const Listado = ({guitarras}) => {
  return (
    <div>
        {guitarras.map( guitarra => (
            <Guitarra 
              key
            />
        ))}
    </div>
  )
}

export default Listado
