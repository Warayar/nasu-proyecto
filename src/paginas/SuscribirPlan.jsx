import React, { useState } from 'react';
import InicioScroll from './InicioScroll';
import { NavLink } from 'react-router-dom';
import '../estilos/SuscribirPlan.css'; 

const SuscribirPlan = () => {
    document.title = "Plan Registro";
    const [numOfPets, setNumOfPets] = useState(1); // Monitorea el numero de mascotas
  
    const handleDropdownChange = (e) => {
      setNumOfPets(parseInt(e.target.value, 10));
    };
  
    const renderPetCards = () => {
      const petCards = [];
      for (let i = 1; i <= numOfPets; i++) {
        petCards.push(
          <div className="card-Suscribir" key={i}>
            <h4>Datos de la mascota # {i}</h4>
            <label>Nombre de la mascota:</label>
            <input type="text" />
  
            <label>Mi mascota es</label>
            <input type="text" /> 

            <div className="input-group">
            <label>Fecha de nacimiento</label>
            <div className="date-input-group">
              <input type="date" />
              {/* <span className="date-icon"> 
                <FaCalendarAlt />
              </span>*/}
            </div>
          </div> 

            <label>Sexo de la mascota</label>
            <select>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        );
      }
      return petCards;
    };

  return (
    <div className="container-Suscribir">
    <div className="with-image-Suscribir"> 
    <div className="content-Suscribir">    
    <img src={ require('../Imagenes/Inicio/captura2.png')} alt="" />
    <h3>REGISTRO DE MASCOTAS</h3>
    <div className='ddl-Suscribir'>
  <div className="select-container-Suscribir">
    <label>¿Cuántas mascotas hay en su familia?</label>
    <select onChange={handleDropdownChange} value={numOfPets}>
      <option value={1}>1 mascota</option>
      <option value={2}>2 mascotas</option>
      <option value={3}>3 mascotas</option>
      <option value={4}>4 mascotas</option>
    </select>
  </div>
      <div className="pet-Suscribir">{renderPetCards()}</div>
      <NavLink to='/elegir_plan'><button>Siguiente</button></NavLink>
    </div>
    </div>
    </div>
    <InicioScroll />
    </div>
  );
};

export default SuscribirPlan;
