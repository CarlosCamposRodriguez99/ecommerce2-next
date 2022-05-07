

const Curso = ({curso}) => {

  const { titulo, contenido, imagen } = curso

  return (
    <section>
      <div className='contenedor'>
        <div>
          <h2>{titulo}</h2>
          <p>{contenido}</p>

          <a href="#">Más Información</a>
        </div>
      </div>

      <style jsx>{`
        section {
          
        }
      
      `}</style>
    </section>
  )
}

export default Curso
