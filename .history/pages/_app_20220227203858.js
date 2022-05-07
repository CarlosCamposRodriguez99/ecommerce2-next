import { useState } from 'react';
import '../styles/normalize.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = producto => {
    setCarrito([...carrito, producto]);
  }

  
  return <Component {...pageProps} 
    carrito={carrito}
    agregarCarrito
  
  />
}

export default MyApp
