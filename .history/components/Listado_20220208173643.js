import Guitarra from './Guitarra'

const Listado = ({guitarras}) => {
  return (
    <div>
        {guitarras.map( guitarra => (
            <Guitarra 
              key={guitarra.url}
            />
        ))}
    </div>
  )
}

export default Listado
