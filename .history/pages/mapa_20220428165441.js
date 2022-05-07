import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../styles/Nosotros.module.css';

const Nosotros = () => {
  return (
    <Layout
      pagina='Mapa'
    >
      <main className="contenedor">
        <h2 className="heading">Formulario</h2>
        <p className="text-2xl my-10">Llena el siguiente formulario para continuar</p>
        <form>
          <div className="flex">
            <label
              className="block uppercase text-slate-800 font-bold text-xl mb-4"
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
          </div>


        </form>
      </main>
    </Layout>


  )
}

export default Nosotros;
