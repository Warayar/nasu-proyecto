import React, { useState } from 'react';
import '../estilos/Contactenos.css';
import InicioScroll from './InicioScroll';

const Contactenos = () => {
    document.title = "Contacto";
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    nombreMascota: '',
    asunto: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
  };

  return (
    <div className="container-Contactenos">
      <div className="with-image-Contactenos">
        <div className="content-Contactenos">
        <h1>Contáctenos</h1>
        <p>Deseamos estar Junto a tu Mascota. Dejanos un mensaje o consulta y te responderemos lo antes posible.</p>

    </div>
    </div>
          <div className="contenedor-Contactenos">
          <div className='casilla-Contactenos-Left casilla-Contactenos'>          
          <div className="text-container-Contactenos-Left">
          <form onSubmit={handleSubmit} className="form">
          <h1>Envíenos tu consulta</h1>
          <p>Podés llamarnos al Tel. 4001-7814 o escribirnos al Whatsapp 4001-7814</p>
          
            <label htmlFor="nombre">Nombre Completo</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
    
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
    
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
    
            <label htmlFor="nombreMascota">Nombre de la mascota</label>
            <input
              type="text"
              id="nombreMascota"
              name="nombreMascota"
              value={formData.nombreMascota}
              onChange={handleChange}
            />
    
            <label htmlFor="asunto">Asunto</label>
            <textarea
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
            ></textarea>
    
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>        
            <button className='button-Contactenos' type="submit">Enviar Mensaje</button>
          </form>
          </div>
          <div className="image-form">
          <img src={ require('../Imagenes/Contactenos/captura1.png')} alt="" />
          </div>
        </div>
                </div>
                <InicioScroll />
                </div>               
    
  );
};

export default Contactenos;
