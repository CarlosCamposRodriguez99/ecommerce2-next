import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../styles/Nosotros.module.css';

const Nosotros = () => {
  return (
    <Layout
      pagina='Mapa'
    >
      <main className="contenedor">
        <h2 className="heading">Llene el siguiente formulario para completar su pedido</h2>
        <div className={styles.contenido}>
          <div>
            <form>
              
            </form>
          </div>
        </div>
      </main>
    </Layout>


  )
}

export default Nosotros;
