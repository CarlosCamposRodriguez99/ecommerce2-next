import Layout from '../components/Layout';
import styles from "../styles/Carrito.module.css";

const Carrito = ({carrito}) => {

  return ( 
    <Layout pagina={'Carrito de compras'}>
      <h1 className="heading"></h1>
      <main className={`${styles.contenido} contenedor`}>
        <div className={styles.carrito}>
          {carrito.lenght === ?}

        </div>
        <div>2</div>
      </main>
    </Layout>

  );
}

export default Carrito;