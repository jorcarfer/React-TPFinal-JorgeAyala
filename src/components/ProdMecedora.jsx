//  const URL = 'https://69162780a7a34288a27c82d0.mockapi.io/api/Productos';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';
import { useProductosContext } from "../context/ProductosContext";
import Styles from './Productos.module.css'
import Boton from './Botones.module.css'
import { useState } from "react";

const Productos2 = () => {
   
  // Usamos los contextos 
  const { productos, setSelectedProductId, cargando, error } = useProductosContext();
  const { agregarAlCarrito } = useContext(CarritoContext);

  const prodCat = productos.filter((producto, indice) => producto.categoria.includes('Mecedor'))

 // Logica de Paginacion 
  const productosPorPagina = 8; 
  const [paginaActual, setPaginaActual] = useState(1);

  if (cargando) return 'Cargando productos...';
  if (error) return error;

  // Calcular el índice de los productos a mostrar en la página actual
  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosActuales = prodCat.slice(indicePrimerProducto, indiceUltimoProducto);

  // Cambiar de pagina
  const totalPaginas = Math.ceil(prodCat.length / productosPorPagina);
  const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);

  return(
      
    <div>
      <h2 className="text-2xl font-semibold tracking-tight text-balance text-yellow-500 sm:text-3xl">Mecedoras</h2>
      <div className={Styles.cont1}>
          {productosActuales.map((producto) => (
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
     {/* Paginador */}
      <div className="flex justify-center gap-2 my-8">
        {Array.from({ length: totalPaginas }, (_, indice) => (
          <button
            key={indice + 1}
            className={`px-4 py-2 rounded ${
              paginaActual === indice + 1 
                ? "bg-black text-white" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => cambiarPagina(indice + 1)}
          >
            {indice + 1}
          </button>
        ))}
      </div>
    
    
    
    </div>
  );
};

export default Productos2;