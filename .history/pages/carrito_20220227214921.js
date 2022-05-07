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
                  <Image layout="responsive" width={250} height={480} src={producto.imagen} alt={producto.nombre} /> 
                  
                </div>

                <div>
                  <p className={styles.nombre}>{producto.nombre}</p>
                  <p className={styles.cantidad}>Cantidad:{producto.cantidad}</p>
                  <p className={styles.precio}>${producto.precio}</p>   
                  <p className={styles.subtotal}>Subtotal: $<span></span>{producto.subtotal}</p> 
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