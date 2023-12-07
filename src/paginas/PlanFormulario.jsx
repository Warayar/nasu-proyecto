import React from 'react';
import InicioScroll from './InicioScroll';
import { NavLink } from 'react-router-dom';
import '../estilos/PlanFormulario.css';

const SuscribirPlan = () => {
  document.title = "Plan Formulario";

  return (
    <div className="container-plan_formulario">
        <div className="content-plan_formulario">
          <h3>DATOS DEL PROPIETARIO</h3>
          <div className='ddl-plan_formulario'>
            <div className="select-container-plan_formulario"> 
            <div className="content-formulario">          
            <div className="form-row">
    <div className="form-group">
      <label>Tipo de Identificación</label>
      <input type="text" />
    </div>
    <div className="form-group">
      <label>Número de Identificación *</label>
      <input type="text" />
      <label className='lblobligatorio'>Campo obligatorio</label>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group">
      <label>Nombre *</label>
      <input type="text" />
      <label>Campo obligatorio</label>
    </div>
    <div className="form-group">
      <label>Primer Apellido</label>
      <input type="text" />
    </div>
    <div className="form-group">
      <label>Segundo Apellido</label>
      <input type="text" />
    </div>
  </div>
  <div className="form-row">
    <div className="form-group">
      <label>Teléfono</label>
      <input type="text" />
    </div>
    <div className="form-group">
      <label>Sexo</label>
      <input type="text" />
    </div>
    <div className="form-group">
      <label>Fecha de Nacimiento</label>
      <input type="text" />
    </div>
  </div>
  <div className="form-row">
    <div className="form-group">
      <label>Correo Electrónico *</label>
      <input type="text" />
      <label>Campo obligatorio</label>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group">
      <label>Contraseña *</label>
      <input type="text" />
      <label>Campo obligatorio</label>
    </div>
    <div className="form-group">
      <label>Repetir Contraseña *</label>
      <input type="text" />
      <label>Campo obligatorio</label>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group">
      <label>Provincia *</label>
      <input type="text" />
      <label>Campo obligatorio</label>
    </div>
    <div className="form-group">
      <label>Canton *</label>
      <input type="text" />
      <label>Campo obligatorio</label>
    </div>
    <div className="form-group">
      <label>Distrito *</label>
      <input type="text" />
      <label>Campo obligatorio</label>
    </div>
  </div>
  <h4>DATOS DE FACTURACIÓN</h4>
  <div className="form-row">
    <div className="form-group">
      <input type="checkbox" />
      <label>USAR LOS MISMOS DATOS DEL PROPIETARIO</label>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group">
      <label>Nombre Completo</label>
      <input type="text" />
    </div>
    <div className="form-group">
      <label>Cédula (Físca/Jurídica)</label>
      <input type="text" />
    </div>
  </div>
  {/* Repeat the structure for the eighth line */}
  <div className="form-row">
  <div className="form-group">
    <label>Correo Electrónico Facturación</label>
    <input type="text" />
  </div>
  <div className="form-group">
    <label>Teléfono</label>
    <input type="text" />
  </div>
</div>







</div> 
            </div>






   
            <NavLink className="btn-regresarfrm" to='/suscribir_un_plan'><button>Regresar</button></NavLink>
            <NavLink className="btn-siguientefrm" to='/plan_formulario'><button>Siguiente</button></NavLink>
          </div>
        </div>
      <InicioScroll />
    </div>
  );
};

export default SuscribirPlan;
