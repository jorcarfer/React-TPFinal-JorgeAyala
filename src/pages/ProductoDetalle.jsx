import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductosContext } from "../context/ProductosContext";
import { Link } from "react-router-dom";
import Boton from "../components/Botones.module.css"


const ProductoDetalle = () => {
  
  //uso el contexto 
  const { selectedProduct } = useProductosContext();

  return(
    <>
      <div>
        <h2>Detalles del Producto Nro {selectedProduct.id}</h2>
        <img src={selectedProduct.imagen} alt={selectedProduct.nombre} width={100} height={100} />
        <h3>{selectedProduct.nombre}</h3>
        <p>{selectedProduct.descripcion}</p>
      </div>
            <div>
        <Link to="/InicioProd" className={Boton.link}>Volver a Productos</Link>
      </div>

      
    </>
  );
}

export default ProductoDetalle;

