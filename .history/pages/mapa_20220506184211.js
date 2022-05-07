import Layout from '../components/Layout';
import styles from '../styles/Mapa.module.css';

const Mapa = () => {
  return (
    <Layout
      pagina='Mapa'
    >
      <div className={styles.head}>
        <h2 className={styles.titulo}>Formulario</h2>
        <p className={styles.descripcion}>Llena el siguiente formulario para continuar con tu pedido...</p>
        <form
          
        >
          <div className={styles.contenido}>
            <label
              className="block uppercase text-slate-800 font-bold text-xl"
              htmlFor="nombre"
            >Nombre(s) </label>

              <input 
                type="text"
                id="nombre"
                className={styles.borde}
              />

            <label
              className="block uppercase text-slate-800 font-bold text-xl"
              htmlFor="apellido"
            >Apellido(s) </label>

              <input 
                type="text"
                id="apellido"
                className={styles.borde}
              />

            <label
              className="block uppercase text-slate-800 font-bold text-xl"
              htmlFor="email"
            >Email </label>

              <input 
                type="text"
                id="email"
                className={styles.borde}
              />

            <label
              className="block uppercase text-slate-600 font-bold text-xl"
              htmlFor="celular"
            >Celular </label>

              <input 
                type="text"
                id="celular"
                className={styles.borde}
              />

            <label
              className="block uppercase text-slate-600 font-bold text-xl"
              htmlFor="avenida"
            >Avenida</label>

              <input 
                type="text"
                id="avenida"
                className={styles.borde}
              />
              
            <label
              className="block uppercase text-slate-600 font-bold text-xl"
              htmlFor="calle"
            >Calle </label>

              <input 
                type="text"
                id="calle"
                className={styles.borde}
              />

            <label
              className="block uppercase text-slate-600 font-bold text-xl"
              htmlFor="codigoPostal"
            >C.P </label>

              <input 
                type="text"
                id="codigoPostal"
                className={styles.borde}
              />

            <label
              className="block uppercase text-slate-600 font-bold text-xl"
              htmlFor="numeroCalle"
            >No. Calle </label>

              <input 
                type="text"
                id="numeroCalle"
                className={styles.borde}
              />
          </div>
        </form>
      

        <div className={styles.campo}>
          <input 
            value="Siguiente"
            className={styles.boton}
            type="submit"
          
          />
        </div>
      </div>

      <div className={styles.head}>
        <div className={styles.contenido}>
          <p>mapa</p>
        </div>

      </div>

        
        
    </Layout>


  )
}

export default Mapa;


// css-border: en input: "bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"