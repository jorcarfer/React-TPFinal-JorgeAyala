//  const URL = 'https://69162780a7a34288a27c82d0.mockapi.io/api/Productos';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';
import { useProductosContext } from "../context/ProductosContext";
import Styles from './Productos.module.css'
import Boton from './Botones.module.css'

const Productos2 = () => {
  
  // Usamos los contextos 
  const { productos, setSelectedProductId, cargando, error } = useProductosContext();
  const { agregarAlCarrito } = useContext(CarritoContext);

  const prodCat = productos.filter((producto, indice) => producto.categoria.includes('Mecedor'))

  if (cargando) return 'Cargando productos...';
  if (error) return error;

  return(
      
    <div>
      <h2>Mecedoras</h2>
      <div className={Styles.cont1}>
          {prodCat.map((producto) => (
            <div  key={producto.id}>
              <div className={Styles.prod}>
                  <img src={producto.imagen} height={80} width={80}/>
                  <h4>{producto.nombre}</h4>
                  <h2>{producto.precio}$</h2>
                  
                <br></br>
              <Link to={`/productos/${producto.id}`} className={Boton.link} onClick={() => setSelectedProductId(producto.id)} >Detalles</Link>
              <br></br>
                  <button className={Boton.agregar} onClick={() => agregarAlCarrito(producto)}>Agregar</button>
          
            </div>
          </div>
          ))} 
      </div>  
    </div>
  );
};

export default Productos2;