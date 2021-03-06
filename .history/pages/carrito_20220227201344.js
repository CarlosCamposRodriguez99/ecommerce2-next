import Layout from '../components/Layout';
import styles from '../styles/Carrito.module.css';


const Carrito = () => {
  return ( 
    <Layout pagina={'Carrito de compras'}>
      <h1 className="heading"></h1>
      <main className={`${styles.contenido}`}>
        <div>1</div>
        <div>2</div>
      </main>
    </Layout>

  );
}

export default Carrito;