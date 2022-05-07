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
        <div className={styles.contenido}>
          <div className="">
            <form>

            </form>
          </div>
        </div>
      </main>
    </Layout>


  )
}

export default Nosotros;
