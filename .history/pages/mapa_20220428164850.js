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
        <p className="text-2xl my-10">Confirma tu Pedido a Continuación</p>
        <form>
          <div>
            <label
              className="block uppercase text-slate-800 font-bold text-xl -2"
              htmlFor="nombre"
            >Nombre</label>

            <input 
              type="text"
              id="nombre"
              className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            />
          </div>


        </form>
      </main>
    </Layout>


  )
}

export default Nosotros;
