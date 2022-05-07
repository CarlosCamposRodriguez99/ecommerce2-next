import Layout from '../components/Layout';
import Image from 'next/image';
import styles from "../styles/Carrito.module.css";

const Carrito = ({carrito}) => {

  return ( 
    <Layout pagina={'Carrito de compras'}>
      <h1 className="heading"></h1>
      <main className={`${styles.contenido} contenedor`}>
        <div className={styles.carrito}>
          {carrito.lenght === 0 ? 'Carrito vacio' : (
            carrito.map( producto => (
              <div key={producto._id} className={styles.producto}>
                <div>
                  <Image responsive="responsive" /> 
                  
                </div>

                <div> 
                  
                </div> 
                
              </div>
            ))
          )}

        </div>
        <div>2</div>
      </main>
    </Layout>

  );
}

export default Carrito;