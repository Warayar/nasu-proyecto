// ResponsiveForm.js
import React, { useState } from 'react';
import '../estilos/Contactenos.css'; // Create a CSS file for styling
import InicioScroll from './InicioScroll';

const Contactenos = () => {
    document.title = "Contacto";
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    petName: '',
    about: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
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
          
            <label htmlFor="fullName">Nombre Completo</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
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
    
            <label htmlFor="phone">Teléfono</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
    
            <label htmlFor="petName">Nombre de la mascota</label>
            <input
              type="text"
              id="petName"
              name="petName"
              value={formData.petName}
              onChange={handleChange}
            />
    
            <label htmlFor="about">Asunto</label>
            <textarea
              id="about"
              name="about"
              value={formData.about}
              onChange={handleChange}
            ></textarea>
    
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
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
