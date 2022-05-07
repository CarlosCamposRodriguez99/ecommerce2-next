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
        <h1 className="text-4xl font-black">Total del pedido</h1>
        <p className="text-2xl my-10">Confirma tu Pedido a Continuación</p>
        <form>
          <div>
            <label
              className="block uppercase text-slate-800 font-bold text-xl"
              htmlFor="nombre"
            >Nombre</label>
          </div>
        </form>
      </main>
    </Layout>


  )
}

export default Nosotros;