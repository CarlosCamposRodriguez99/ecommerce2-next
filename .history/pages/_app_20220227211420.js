import { useState } from 'react';
import '../styles/normalize.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (producto) => {
    if(carrito.some((articulo) => articulo._id === producto._id)) {
      const carritoActualizado = carrito.map( articulo => {
        if(articulo._id === producto._id) {
          articulo.cantidad = producto.cantidad
        }
        return articulo;
      });

      setCarrito(carritoActualizado)
    } else {
      setCarrito([...carrito, producto]);
    }

  };

  
  return <Component {...pageProps} 
    carrito={carrito}
    agregarCarrito={agregarCarrito}
  
  />
}

export default MyApp
