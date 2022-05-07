import { useState } from 'react';
import '../styles/normalize.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (producto) => {
    if(carrito.some( articulo => articulo._id === producto._id)) {
      console.log()
    }




    setCarrito([...carrito, producto]);
  }

  
  return <Component {...pageProps} 
    carrito={carrito}
    agregarCarrito={agregarCarrito}
  
  />
}

export default MyApp
