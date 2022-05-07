import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../styles/Nosotros.module.css';

const Nosotros = () => {
  return (
    <Layout
      pagina='Mapa'
    >
      <main className="contenedor">
        <h2 className="heading">Llene el siguiente formulario</h2>
        <div className={styles.contenido}>

          <Image layout="responsive" width={600} height={450} src={"/img/nosotros.jpg"} alt="Imagen Nosotros" />

          <div>
          </div>
        </div>
      </main>
    </Layout>


  )
}

export default Nosotros;
