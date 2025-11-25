import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import Boton from '../components/botones.module.css'
import Formu from '../components/Formulario.module.css'


const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  
  const { login } = useAuthContext();
  const navigate = useNavigate();
  
  const manejarSubmit = (evento) => {
    evento.preventDefault();
    // Simulamos la Autenticacion
    if(usuario == 'admin' && contrasenia == '1234') {
      login(usuario);
      navigate('/admin');
    } else {
      alert('Usuario o Contraseña inválido');
    }
  }

  return (
 
    <div className={Formu.contacto}>
      <h2>Iniciar Sesion</h2>
      <form onSubmit={manejarSubmit}>
        
        <h4>Usuario:</h4>

        <input 
          type='text'
          value={usuario}
          placeholder="Ingrese su usuario."
          onChange={(evento) => setUsuario(evento.target.value)}
        />
        <br/>
        <h4>Contraseña:</h4>
        
        <input 
          type='password'
          value={contrasenia}
          placeholder="Ingrese su contraseña."
          onChange={(evento) => setContrasenia(evento.target.value)}
        />
        <br/>
        <br/>
      
        <button type='submit' className={Boton.agregar}>Continuar</button>
        <br/>
        <br/>
      </form>
    </div>    
  );
}

export default Login;