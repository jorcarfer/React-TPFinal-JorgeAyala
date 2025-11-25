import { useState } from 'react';
import Boton from './Botones.module.css'
import Formu from './Formulario.module.css'

const Formulario = () => {
  
  const [nombre, setNombre] = useState('');

  const manejarEnvio = (evento) => {
    evento.preventDefault()
    alert(`Form de: ${nombre} enviado`)
  }

  return(
    <div className={Formu.contacto}>
    <form  onSubmit={manejarEnvio}>
     <br></br>
      <h4>Nombre y Apellido:</h4>
           
            <input type="text" placeholder="Ingrese su nombre" value={nombre}
        onChange={evento => setNombre(evento.target.value)} />
           <br></br>
     <h4>E-Mail:</h4>
      <input 
        type="text"
        placeholder="Ingrese su email" 
        />
         <h4>Consulta:</h4>
            
            <textarea name="consulta" rows="5" cols="30" placeholder="Escriba su consulta..." id="texto"></textarea>
      <br></br>
      <br></br>
      <button className={Boton.agregar}>Enviar</button>
      <br></br>
      <br></br>
    </form>
    </div>
  );
}

export default Formulario;