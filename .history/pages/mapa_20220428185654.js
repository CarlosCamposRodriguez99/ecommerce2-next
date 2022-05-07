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
      <form>

      </form>
          
        </div>
      </form>
        
        <div className="contenido">
          <p>mapa</p>
        </div>
    </Layout>


  )
}

export default Mapa;
