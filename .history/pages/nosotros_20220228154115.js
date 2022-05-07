import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../styles/Nosotros.module.css';

const Nosotros = () => {
  return (
    <Layout
      pagina='Nosotros'
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>

          <Image layout="responsive" width={600} height={450} src={"/img/nosotros.jpg"} alt="Imagen Nosotros" fadeIn="soft" />

          <div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
        </div>
      </main>
    </Layout>


  )
}

export default Nosotros;
