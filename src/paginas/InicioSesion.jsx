import React from 'react';
import { Link } from 'react-router-dom';
import InicioScroll from './InicioScroll';
import '../estilos/InicioSesion.css'; 

const InicioSesion = () => {
  document.title = "Panel Login";
  return (
    <div className="container-Login">
    
      <div className="with-image-Login">  
        <div className="content-Login">    
        <img src={ require('../Imagenes/Inicio/captura2.png')} alt="" className="half-in-out" />
        <h1>Bienvenido a Nasu</h1>
        <p>Ingresa los datos de tu cuenta para iniciar sesión</p>
        <input className="input-Login" placeholder="Ingrese su usuario"></input>
        <input className="input-Login" placeholder="Ingrese su contraseña"></input>
        <button className='button-Login_sesion'>Iniciar Sesión</button>
        <p>{' '}<Link to="/recuperar">¿Ha olvidado su contraseña? </Link></p>

        <button className='button-Login_registrar'>¡Quiero registrar mi cuenta!</button>
    </div>
    </div>         
    <InicioScroll />
                </div>               
    
  );
};

export default InicioSesion;
