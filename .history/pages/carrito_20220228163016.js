import Layout from '../components/Layout';
import Image from 'next/image';
import styles from "../styles/Carrito.module.css";

const Carrito = ({carrito}) => {

  return ( 
    <Layout pagina={'Carrito de compras'}>
      <h1 className="heading">Checkout</h1>
      <main className={`${styles.contenido} contenedor`}>
        <div className={styles.carrito}>
          {carrito.lenght === 0 ? 'Carrito vacio' : (
            carrito.map( producto => (
              <div key={producto._id} className={styles.producto}>
                <div>
                  <Image layout="responsive" width={250} height={500} src={producto.imagen} alt={producto.nombre} /> 
                  
                </div>

                <div>
                  <p className={styles.nombre}>{producto.nombre}</p>
                  <div>
                    <p className={styles.cantidad}>
                      Cantidad:{producto.cantidad}
                    </p>
                    <select
                      value={cantidad}
                    >
                      <option value="">--Seleccione--</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
                  </div>
                  <p className={styles.precio}>
                    $ <span>{producto.precio}</span>
                  </p>
                  <p className={styles.subtotal}>
                    Subtotal: $
                    <span>{producto.precio * producto.cantidad}</span>
                  </p> 
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