import { useContext } from 'react';
import Navbar from './NavBar.jsx';
import styles from './Header.module.css';
import BagIcon from '../assets/BagIcon.jsx'
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext.jsx';
import { CarritoContext } from '../context/CarritoContext.jsx';

const Header = () => {
  const { carrito } = useContext(CarritoContext);
  const {usuario, logout} = useAuthContext();
  const estaLogeado = !!usuario;
  const contadorEnCarrito = carrito.length;

  return (
    <header style={{ backgroundColor: "white", padding: "10px",
textAlign: "center", color: "goldenrod" }}>
   

      <div className={styles.cont}>
                  <div>
                  <img src="https://jorcarfer.github.io/Jctapiceria/Imagenes/JC%20Tapiceria%20Logo.png" alt="Descripcion cuando no aparece la foto"  width="200px"></img>
      </div>
      

   
   
     
      {/* Seccion Derecha: Iconos */}
      <div className={styles.iconsContainer}>
        <Navbar />
        <div className={styles.botones}>
        { estaLogeado ? 
          <button onClick={logout} className={styles.logout}>LogOut</button> 
          :
          <Link to="/login">
            <button className={styles.login}>Login</button>
          </Link>
        }
        <div className={styles.iconoDeCarrito}>
          <Link to="/carrito">
           <button className={styles.login}><BagIcon /></button>
          {/* Renderiza el contador solo si es mayor que 0 */}
          {contadorEnCarrito > 0 && (
            <span className={styles.contadorDeCarrito}>
              {contadorEnCarrito}
            </span>
          )}
          </Link>
        </div>
        </div>
      </div>
      </div>
    </header>   
  );
};

export default Header;