import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../styles/Mapa.module.css';

const Mapa = () => {
  return (
    <Layout
      pagina='Mapa'
    >
      <h2 className="heading">Formulario</h2>
      <p className="text-2xl my-10">Llena el siguiente formulario para continuar con tu pedido</p>
      <div className={styles.contenido}>
      <div>
        <form>
          <label
            className="block uppercase text-slate-800 font-bold text-xl"
            htmlFor="nombre"
          >Nombres </label>

          <input 
            type="text"
            id="nombre"
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
          />

          <label
            className="block uppercase text-slate-800 font-bold text-xl"
            htmlFor="apellido"
          >Apellidos </label>

          <input 
            type="text"
            id="apellido"
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
          />

          <label
            className="block uppercase text-slate-800 font-bold text-xl"
            htmlFor="correo"
          >Email  </label>

          <input 
            type="text"
            id="correo"
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
          />

          <label
            className="block uppercase text-slate-600 font-bold text-xl"
            htmlFor="numero"
          >Número </label>

          <input 
            type="text"
            id="numero"
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
          />
        </div>  

        </form>
          
      </div>
        
        <div className="contenido">
          <p>mapa</p>
        </div>
    </Layout>


  )
}

export default Mapa;
