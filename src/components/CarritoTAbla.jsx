import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';

import Styles from './Carrito.module.css'

const Carrito = () => {

  const { carrito, eliminarDelCarrito } = useContext(CarritoContext);
  
  return (
      <div className={Styles.productos}>
        <h2>Carrito</h2>
        {carrito.map((producto, indice) => (
          <table className={Styles.tabla}>
            <tr>
              <div className={Styles.prod} key={indice}>
                <td>
                  <img src={producto.imagen} alt={producto.nombre} height={80} width={80} /> 
                </td>
                <td></td><td></td> <td></td><td></td> <td></td><td></td><td></td><td></td><td></td><td></td>
                
                
               
                <td>
                  <p key={producto.indice}> {producto.nombre} </p>
                  <p>$ {producto.precio}</p>
                </td>
                <td></td><td></td> <td></td><td></td> <td></td><td></td><td></td><td></td><td></td><td></td>
                <td>
                  <button className={Styles.boton} onClick={() => eliminarDelCarrito(indice)} id='Eliminar'>Eliminar</button>
                </td>
              </div>
            </tr>
            </table>  
        ))}
      </div>
    ); 
  };
  
  export default Carrito; 