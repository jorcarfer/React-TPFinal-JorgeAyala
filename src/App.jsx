
import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';

import InicioProd from './pages/InicioProd';
import Mecedora from './pages/Mecedora';
import ProductoDetalle from './pages/ProductoDetalle';
import Contacto from './pages/Contacto';
import Inicio from './pages/Inicio.jsx';

import Header from './components/Header.jsx'
//import MainNO from './components/MainNO.jsx'
import Footer from './components/Footer.jsx'

import Login from './pages/Login.jsx'
import Admin from './pages/Admin.jsx'
import RutaProtegida from './components/RutaProtegida.jsx'
import Carrito from './components/Carrito.jsx'

import ResultadosBusqueda from "./components/ResultadosBusqueda";

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(true);

  const cerrarSesion = () => setisAuthenticated(false);
  const iniciarSesion = () => setisAuthenticated(true);

 // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Inicio/>}/> 
        <Route path='/Inicio' element={<Inicio/>}/> 
        <Route path='/InicioProd' element={<InicioProd/>}/> 
        <Route path='/Mecedora' element={<Mecedora/>}/> 
        <Route path='/productos/:id' element={<ProductoDetalle/>}/>
        <Route path='/contacto' element={<Contacto/>}/> 
        <Route path={'/login'} element={<Login/>} />
        <Route path="/busqueda" element={<ResultadosBusqueda />} />
        <Route path="/carrito" element={
            <RutaProtegida >
              <Carrito />
            </RutaProtegida>
          }
        />
        <Route path={'/admin'} element={
          <RutaProtegida isAuthenticated={isAuthenticated}>
              <Admin/>
            </RutaProtegida>} 
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
