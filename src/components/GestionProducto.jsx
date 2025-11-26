import { useState, useEffect } from "react";
import FormProducto from "./FormProducto";
import { useProductosContext } from "../context/ProductosContext";
import styles from "./GestionProducto.module.css";
import CirclePlus from "../assets/CirclePlus";
import SquarePen from "../assets/SquarePen";
import TrashIcon from "../assets/TrashIcon";


const GestionProductos = () => {
  // Cargando contexto de producto
  const { productos, eliminarProducto } = useProductosContext();
  // Estados 
  const [mostrarForm, setMostrarForm] = useState(false);
  const [modoFormulario, setModoFormulario] = useState("agregar");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [productoAEliminar, setProductoAEliminar] = useState(null);

  // Abrir formulario para AGREGAR
  const abrirFormularioAgregar = () => {
    setModoFormulario("agregar");
    setProductoSeleccionado(null); // Sin producto inicial
    setMostrarForm(true);
  };

  // Abrir formulario para EDITAR
  const abrirFormularioEditar = (producto) => {
    setModoFormulario("editar");
    setProductoSeleccionado(producto); // Pasar el producto a editar
    setMostrarForm(true);
  };

  // Cerrar formulario
  const cerrarFormulario = () => {
    setMostrarForm(false);
    setProductoSeleccionado(null);
  };

    // Confirmar eliminación
  const confirmarEliminacion = (producto) => {
    setProductoAEliminar(producto);
  };

    const handleEliminar = () => {
    if (productoAEliminar) {
      eliminarProducto(productoAEliminar.id);
      setProductoAEliminar(null);
    }
  };

  return (
    <div className={styles.container}>
      
      <div>
        
        <div className={styles.cabecera}>
         <h2>Lista de Productos</h2>
        {/* Botón para agregar producto */}
        <div>
        <button
          onClick={abrirFormularioAgregar}
          className={styles.botonAgr}
        >
          <CirclePlus />
          <p>Agregar Producto</p>
        </button>
        </div>
        </div>
        {/* Lista de productos */}
        
        <div>
          {productos.length === 0 ? (
            <p>No hay productos</p>
          ) : (
            <div>
             
              {productos.map((producto) => (
                <div
                  key={producto.id}
                  className={styles.productoItem}
                >
                  <img className={styles.imagen} src={producto.imagen} alt={producto.nombre} />
                  <h3>{producto.nombre}</h3>
                  <p>Precio: ${producto.precio}</p>
                  {/* Botones para editar y eliminar este producto */}
                  <button 
                    className={styles.boton} 
                    onClick={() => abrirFormularioEditar(producto)}
                  >
                   <SquarePen />
                  </button>
                  <button 
                    className={styles.boton} 
                    /*onClick={() => eliminarProducto(producto.id)}*/
                    onClick={() => confirmarEliminacion(producto)}
                  >
                   <TrashIcon />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>


 {/* Modal de confirmacion de eliminar */}
      {productoAEliminar && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-red-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Confirmar eliminación</h3>
                <p className="text-sm text-gray-600 mt-1">Esta acción no se puede deshacer</p>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700">
                ¿Estás seguro que querés eliminar <span className="font-semibold">"{productoAEliminar.nombre}"</span>?
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setProductoAEliminar(null)}
                className="flex-1 px-4 py-2.5 border-2 border-gray-300 text-gray-700 rounded-md font-semibold hover:bg-gray-50 transition-colors duration-200"
              >
                Cancelar
              </button>
              <button
                onClick={handleEliminar}
                className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition-colors duration-200"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}



        {/* Modal - Formulario condicional */}
        {mostrarForm && (
          <>
              {/* Pasar los props correctos según el modo */}
              <FormProducto
                productoInicial={productoSeleccionado || {}}
                modo={modoFormulario}
                onCerrar={cerrarFormulario}
              />
          </>
        )}
      </div>
    </div>
  );
};

export default GestionProductos;