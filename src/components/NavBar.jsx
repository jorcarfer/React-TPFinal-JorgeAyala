import { Link } from "react-router-dom";
import styles from './NavBar.module.css'; 
import { useAuthContext } from '../context/AuthContext';




const NavBar = () => {
  const { usuario } = useAuthContext();
  const esAdmin = usuario === 'admin';

    return(
      <nav>
        <ul className={styles.lista}>
          <li className={styles.item}>
            <Link to="/Inicio" className={styles.link}>Inicio</Link>
            <Link to="/InicioProd" className={styles.link}>Productos</Link>
            <Link to="/Mecedora" className={styles.link}>Mecedoras</Link>
            
            <Link to="/contacto" className={styles.link}>Contacto</Link>
            {esAdmin && 
              <Link to="/Admin" className={styles.link}>Admin</Link>
            }

          </li>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;

  
