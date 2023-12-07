import React from 'react';
import InicioScroll from './InicioScroll';
import '../estilos/RecuperarC.css';

const RecuperarC = () => {
  document.title = "Recupera Contrasena";
  return (
    <div className="container-Recuperar">
    
      <div className="with-image-Recuperar">  
        <div className="content-Recuperar">    
        <img src={ require('../Imagenes/Inicio/captura2.png')} alt="" className="half-in-out" />
        <p>Recuperar</p>
        <input className="input-Recuperar" placeholder="Ingrese su usuario"></input>
        <button className='button-Recuperar'>Enviar</button>
    </div>
    </div>         
    <InicioScroll />
                </div>               
    
  );
};

export default RecuperarC;
