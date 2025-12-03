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
        onChange={evento => setNombre(evento.target.value)} 
        className="block w-full border rounded-md px-3 py-1.5 text-base text-yellow-500 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-400 sm:text-sm/6"/>
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