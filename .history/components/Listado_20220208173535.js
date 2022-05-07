import Guitarra from './Guitarra'

const Listado = ({guitarras}) => {
  return (
    <div>
        {guitarras.map( guitarra => (
            <Guitarra 
              key={guitarra._id}
            />
        ))}
    </div>
  )
}

export default Listado
