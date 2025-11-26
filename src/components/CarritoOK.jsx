import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContextOK';
import Styles from './Carrito.module.css'

const Carrito = () => {

  const { carrito, eliminarDelCarrito } = useContext(CarritoContext);
  
  return (
      <div >
        <h2>Carrito</h2>
        <div className={Styles.container}>
        {carrito.map((producto, indice) => (
       
              <div className={Styles.prod} key={indice}>
                
                  <img src={producto.imagen} alt={producto.nombre} height={80} width={80} /> 
                  <p key={producto.indice}> {producto.nombre} </p>
                  <p>$ {producto.precio}</p>
                
                  <button className={Styles.boton} onClick={() => eliminarDelCarrito(indice)} id='Eliminar'>Eliminar</button>
                
              </div>
          
        ))}
      </div>
      </div>
    ); 
  };
  
  export default Carrito; 