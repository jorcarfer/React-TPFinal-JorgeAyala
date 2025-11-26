import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import TrashIcon from "../assets/TrashIcon";
import BagIcon from "../assets/BagIcon";
import Styles from './Carrito.module.css'



const Carrito = () => {
  const { carrito, eliminarDelCarrito, actualizarCantidad } = useContext(CarritoContext);
  
  // Calcular subtotal
  const subtotal = carrito.reduce((acc, producto) => {
    const cantidad = producto.cantidad || 1;
    return acc + (producto.precio * cantidad);
  }, 0);
  
  const envio = 0;
  // Total
  const total = subtotal + envio;
  
  const handleCantidad = (indice, operacion) => {
    const producto = carrito[indice];
    const cantidadActual = producto.cantidad || 1;
    
    if (operacion === 'incrementar') {
      actualizarCantidad(indice, cantidadActual + 1);
    } else if (operacion === 'decrementar') {
      if (cantidadActual === 1) {
        eliminarDelCarrito(indice);
      } else {
        actualizarCantidad(indice, cantidadActual - 1);
      }
    }
  };
  
  if (carrito.length === 0) {
    return (
      <div>
        <div className="text-center">
          <svg>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <h2>Tu carrito está vacío</h2>
          <p>¡Agregá productos para comenzar tu compra!</p>
          <a href="/InicioProd">
            Ir a comprar
          </a>
        </div>
      </div>
    );
  }
  
  return (
    <div>
      <h1>Carrito de Compras</h1>
      <div>
        {/* Columna Izquierda - Lista de Productos */}
        <div className={Styles.prod}>
          {carrito.map((producto, indice) => {
            const cantidad = producto.cantidad || 1;
            const precioTotal = producto.precio * cantidad;
            
            return (
              <div 
                key={indice} 
                
              >
                <div>
                  {/* Imagen del Producto */}
                  <div>
                    <img width="200px"
                      src={producto.imagen} 
                      alt={producto.nombre}
                    
                    />
                  </div>
                  
                  {/* Informacion del Producto */}
                  <div>
                    <div>
                      <h3>
                        {producto.nombre}
                      </h3>
                      <p>
                        {producto.descripcion || "Producto de alta calidad"}
                      </p>
                    </div>
                    
                    <div>
                      {/* Controles de Cantidad */}
                      <div>
                        <span>Cantidad:</span>
                        <div>
                          <button 
                            onClick={() => handleCantidad(indice, 'decrementar')}
                            
                          >
                            −
                          </button>
                          <span>
                            {cantidad}
                          </span>
                          <button 
                            onClick={() => handleCantidad(indice, 'incrementar')}
                           
                          >
                            +
                          </button>
                        </div>
                      </div>
                      
                      {/* Precio */}
                      <div>
                        <div>
                          <p>
                            ${precioTotal.toLocaleString('es-AR')}
                          </p>
                          {cantidad > 1 && (
                            <p>
                              ${producto.precio.toLocaleString('es-AR')} c/u
                            </p>
                          )}
                        </div>
                        
                        {/* Boton de Eliminar */}
                        <button 
                          onClick={() => eliminarDelCarrito(indice)}
                         
                          aria-label="Eliminar producto"
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Columna Derecha - Resumen del Pedido */}
        <div>
          <div>
            <h2>Resumen del Pedido</h2>
            
            <div>
              <div>
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString('es-AR')}</span>
              </div>
              
              <div>
                <span>Envío</span>
                <span>
                  {envio === 0 ? (
                    <span>¡Gratis!</span>
                  ) : (
                    `$${envio.toLocaleString('es-AR')}`
                  )}
                </span>
              </div>
              
              <div>
                <div>
                  <span>Total</span>
                  <span>
                    ${total.toLocaleString('es-AR')}
                  </span>
                </div>
              </div>
            </div>
            
            <button>
              Proceder al Pago
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;