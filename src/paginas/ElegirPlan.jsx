import React, { useState } from 'react';
import InicioScroll from './InicioScroll';
import { NavLink } from 'react-router-dom';
import '../estilos/ElegirPlan.css';

const SuscribirPlan = () => {
  document.title = "Plan Planes";

  const [accordionOpen, setAccordionOpen] = useState({
    desparasitacioB: false,
    vacunaFelinaB: false,
    corteUnasB: false,
    vacunaRabiaB: false,

    desparasitacionP: false,
    corteUnasP: false,    
    vacunaTripleP: false,
    vacunaFelinaP: false,
    perfilP: false,
    limpiezaP: false,
    consultaGP: false,

    vacunaMO: false,
    desparasitacionO: false,
    corteUnasO: false,   
    vacunaFelinaO: false, 
    perfilO: false,
    limpiezaO: false,
    ultrasonidoO: false,        
    consultaGO: false,


  });

  const toggleAccordion = (accordionName) => {
    setAccordionOpen((prev) => ({
      ...prev,
      [accordionName]: !prev[accordionName],
    }));
  };

  return (
    <div className="container-plan_planes">
        <div className="content-plan_planes">
          <h3>ELIGE EL PLAN PARA: "SD"</h3>
          <div className='ddl-plan_planes'>
            <div className="select-container-plan_planes">            
            <div className="accordion-container">
            <div className="accordion-checkbox-container">
              <input type="checkbox" className="accordion-checkbox line-bronce" />
              <div className="checkbox-titleB">Felino Adulto Bronce</div>
              <div className="checkbox-precio">₡ 8.042</div>
              <div className="checkbox-mes">Total por mes</div>
            </div>

                <div className={`accordion-header ${accordionOpen.desparasitacionB ? 'open' : ''}`}
                  onClick={() => toggleAccordion('desparasitacionB')}
                >
                  Desparasitación Interna y Externa
                </div>
                {accordionOpen.desparasitacionB && (
                  <div className="accordion-content">
                    <p>A los adultos, es fundamental ayudarles a controlar y prevenir las enfermedades parasitarias. Este tratamiento ayuda a mantener la salud digestiva.</p>
                  </div>
                )}

                <div 
                  className={`accordion-header ${accordionOpen.vacunaFelinaB ? 'open' : ''}`}
                  onClick={() => toggleAccordion('vacunaFelinaB')}
                >
                  Vacuna Triple Felina
                </div>
                {accordionOpen.vacunaFelinaB && (
                  <div className="accordion-content">
                    <p>Esta vacuna refuerza la inmunidad del gato adulto contra tres enfermedades virales de mucha importancia: la rinitraqueítis, el calicivirus y la panleucopenia felina.</p>
                  </div>
                )}

                <div 
                  className={`accordion-header ${accordionOpen.corteUnasB ? 'open' : ''}`}
                  onClick={() => toggleAccordion('corteUnasB')}
                >
                  Corte de Uñas
                </div>
                {accordionOpen.corteUnasB && (
                  <div className="accordion-content">
                    <p>Las uñas de los felinos son sus armas más importantes por lo que de forma natural ellos tienden a mantenerlas afiladas y puntiagudas. Al vivir en ambientes caseros, el veterinario puede realizar un corte técnico y profesional para mantenerlas en forma adecuada, evitando heridas o daños en las casas.</p>
                  </div>
                )}

                <div 
                  className={`accordion-header ${accordionOpen.vacunaRabiaB ? 'open' : ''}`}
                  onClick={() => toggleAccordion('vacunaRabiaB')}
                >
                  Vacuna contra Rabia
                </div>
                {accordionOpen.vacunaRabiaB && (
                  <div className="accordion-content">
                    <p>La rabia es una enfermedad mortal que afecta mascotas y humanos. Si bien no se presentan casos clínicos en mascotas, es obligatorio por ley, mantener un esquema de vacunación contra rabia para evitar que la enfermedad vuelva.</p>
                  </div>
                )}

              </div>
            </div>

            <div className="select-container-plan_planes">
            <div className="accordion-container">
            <div className="accordion-checkbox-container">
              <input type="checkbox" className="accordion-checkbox line-plata" />
              <div className="checkbox-titleP">Felino Adulto Plata</div>
              <div className="checkbox-precio">₡ 18.392</div>
              <div className="checkbox-mes">Total por mes</div>
            </div>
              <div className={`accordion-header ${accordionOpen.desparasitacionP ? 'open' : ''}`}
                onClick={() => toggleAccordion('desparasitacionP')}
              >
                Desparasitación Interna y Externa
              </div>
              {accordionOpen.desparasitacionP && (
                <div className="accordion-content">
                  <p>Es un nuevo tratamiento que protege contra las principales enfermedades parasitarias, pues la reinfección puede ocurrira todo,o largo de la vida.</p>
                </div>
              )}

              <div 
                className={`accordion-header ${accordionOpen.corteUnasP ? 'open' : ''}`}
                onClick={() => toggleAccordion('corteUnasP')}
              >
              Corte de uñas
              </div>
              {accordionOpen.corteUnasP && (
                <div className="accordion-content">
                  <p>Las uñas de los felinos son sus armas más importantes por lo que de forma natural ellos tienden a mantenerlas afiladas y puntiagudas. Al vivir en ambientes caseros, el veterinario puede realizar un corte técnico y profesional para mantenerlas en forma adecuada, evitando heridas o daños en las casas.</p>
                </div>
              )}

              <div 
                className={`accordion-header ${accordionOpen.vacunaTripleP ? 'open' : ''}`}
                onClick={() => toggleAccordion('vacunaTripleP')}
              >
              Vacuna Triple + Leucemia
              </div>
              {accordionOpen.vacunaTripleP && (
                <div className="accordion-content">
                  <p>Esta vacuna refuerza la inmunidad de la mascota contra tres enfermedades virales de mucha importancia: la rinitraqueítis, el calicivirus y la panleucopenia felina. Adicionalmente vacunamos contra la Leucemia felina, que es una enfermedad crónica que puede ocasionar la muerte.</p>
                </div>
              )}

              <div 
                className={`accordion-header ${accordionOpen.vacunaFelinaP ? 'open' : ''}`}
                onClick={() => toggleAccordion('vacunaFelinaP')}
              >
                Vacuna contra Rabia
              </div>
              {accordionOpen.vacunaFelinaP && (
                <div className="accordion-content">
                  <p>La rabia es una enfermedad mortal que afecta mascotas y humanos. Si bien no se presentan casos clínicos en mascotas, es obligatorio por ley, mantener un esquema de vacunación contra rabia para evitar que la enfermedad vuelva.</p>
                </div>
              )}

              <div 
              className={`accordion-header ${accordionOpen.perfilP ? 'open' : ''}`}
              onClick={() => toggleAccordion('perfilP')}
            >
            Perfil Bioquímico y Hemograma
            </div>
            {accordionOpen.perfilP && (
              <div className="accordion-content">
                <p>En preparación a la limpieza dental, es fundamental realizar pruebas de sangre para determinar la salud interna de la mascota y estar más seguros de que durante el procedimiento quirúrgico no se presentará ningún factor de riesgo que puede ser evitado.</p>
              </div>
            )}

            <div 
            className={`accordion-header ${accordionOpen.limpiezaP ? 'open' : ''}`}
            onClick={() => toggleAccordion('limpiezaP')}
          >
          Limpieza Dental
          </div>
          {accordionOpen.limpiezaP && (
            <div className="accordion-content">
              <p>La limpieza dental profesional es un procedimiento que se realiza bajo sedación profunda con anestesia parenteral (intyectada) y consiste en realizar una profilaxis dental que elimine la placa bacteriana y las infecciones ginvivales incipientes. Con dicho procedimiento se eliminan infecciones crónicas que pueden llegar a afectar además de la cavidad oral, órganos como los pulmones, el corazón o el cerebro.</p>
            </div>
          )}

          <div 
          className={`accordion-header ${accordionOpen.consultaGP ? 'open' : ''}`}
          onClick={() => toggleAccordion('consultaGP')}
        >
        Consulta General
        </div>
        {accordionOpen.consultaGP && (
          <div className="accordion-content">
            <p>Consulta General.</p>
          </div>
        )}

            </div>
          </div>


          <div className="select-container-plan_planes">
          <div className="accordion-container">
  <div className="accordion-checkbox-container">
    <input type="checkbox" className="accordion-checkbox line-oro" />
    <div className="checkbox-titleO">Felino Adulto Oro</div>
    <div className="checkbox-precio">₡ 23.496</div>
    <div className="checkbox-mes">Total por mes</div>
  </div>
            <div className={`accordion-header ${accordionOpen.vacunaMO ? 'open' : ''}`}
              onClick={() => toggleAccordion('vacunaMO')}
            >
            Vacuna Múltiple (Triple) + Leucemia
            </div>
            {accordionOpen.vacunaMO && (
              <div className="accordion-content">
                <p>Con esta vacuna reforzamos la inmunidad del cachorro contra tres enfermedades virales de mucha importancia: la rinitraqueítis, el calicivirus y la panleucopenia felina. Adicionalmente vacunamos contra la Leucemia felina, que es una enfermedad crónica que puede ocasionar la muerte.</p>
              </div>
            )}

            <div 
              className={`accordion-header ${accordionOpen.desparasitacionO ? 'open' : ''}`}
              onClick={() => toggleAccordion('desparasitacionO')}
            >
            Desparasitación Interna y Externa
            </div>
            {accordionOpen.desparasitacionO && (
              <div className="accordion-content">
                <p>Las enfermedades parasitarias son muy comunes en todas las etapas ya que están expuestos al ambiente. La única manera de controlarlas es brindando tratamientos seguros a lo largo de toda la vida de la mascota.</p>
              </div>
            )}

            <div 
              className={`accordion-header ${accordionOpen.corteUnasO ? 'open' : ''}`}
              onClick={() => toggleAccordion('corteUnasO')}
            >
              Corte de Uñas
            </div>
            {accordionOpen.corteUnasO && (
              <div className="accordion-content">
                <p>Las uñas de los felinos son sus armas más importantes por lo que de forma natural ellos tienden a mantenerlas afiladas y puntiagudas. Al vivir en ambientes caseros, el veterinario puede realizar un corte técnico y profesional para mantenerlas en forma adecuada, evitando heridas o daños en las casas.</p>
              </div>
            )}

            <div 
              className={`accordion-header ${accordionOpen.vacunaFelinaO ? 'open' : ''}`}
              onClick={() => toggleAccordion('vacunaFelinaO')}
            >
              Vacuna contra Rabia
            </div>
            {accordionOpen.vacunaFelinaO && (
              <div className="accordion-content">
                <p>La rabia es una enfermedad mortal que afecta mascotas y humanos. Si bien no se presentan casos clínicos en mascotas, es obligatorio por ley, mantener un esquema de vacunación contra rabia para evitar que la enfermedad vuelva.</p>
              </div>
            )}
            
            <div 
              className={`accordion-header ${accordionOpen.perfilO ? 'open' : ''}`}
              onClick={() => toggleAccordion('perfilO')}
            >
            Perfil Bioquímico y Hemograma
            </div>
            {accordionOpen.perfilO && (
              <div className="accordion-content">
                <p>En preparación a la limpieza dental, es fundamental realizar pruebas de sangre para determinar la salud interna de la mascota y estar más seguros de que durante el procedimiento quirúrgico no se presentará ningún factor de riesgo que puede ser evitado.</p>
              </div>
            )}
            
            <div 
              className={`accordion-header ${accordionOpen.limpiezaO ? 'open' : ''}`}
              onClick={() => toggleAccordion('limpiezaO')}
            >
            Limpieza Dental
            </div>
            {accordionOpen.limpiezaO && (
              <div className="accordion-content">
                <p>La limpieza dental profesional es un procedimiento que se realiza bajo sedación profunda y consiste en realizar una profilaxis dental que elimine la placa bacteriana y las infecciones ginvivales incipientes. Con dicho procedimiento se eliminan infecciones crónicas que pueden llegar a afectar además de la cavidad oral, órganos como los pulmones, el corazón o el cerebro.</p>
              </div>
            )}
            
            <div 
              className={`accordion-header ${accordionOpen.ultrasonidoO ? 'open' : ''}`}
              onClick={() => toggleAccordion('ultrasonidoO')}
            >
            Ultrasonido Abdominal
            </div>
            {accordionOpen.ultrasonidoO && (
              <div className="accordion-content">
                <p>Una vez al año se recomienda utilizar una tpecnica no invasiva para conocer el estado general interno de los organos abdominales.</p>
              </div>
            )}
            
            <div 
              className={`accordion-header ${accordionOpen.consultaGO ? 'open' : ''}`}
              onClick={() => toggleAccordion('consultaGO')}
            >
            Consulta General
            </div>
            {accordionOpen.consultaGO && (
              <div className="accordion-content">
                <p>Consulta General.</p>
              </div>
            )}
          </div>
        </div>
            <NavLink className="btn-regresar" to='/suscribir_un_plan'><button>Regresar</button></NavLink>
            <NavLink className="btn-siguiente" to='/plan_formulario'><button>Siguiente</button></NavLink>
          </div>
        </div>
      <InicioScroll />
    </div>
  );
};

export default SuscribirPlan;
