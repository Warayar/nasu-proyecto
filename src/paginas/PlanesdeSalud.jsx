import React from 'react';
import InicioScroll from './InicioScroll';
import '../estilos/PlanesdeSalud.css';

const PlanesdeSalud = () => {
  document.title = "Planes Informativa";
  return (
    <div className="container-Planes">
      <div className="with-image-Planes">
        <div className="content-Planes">
          <h1>Información de Planes de Salud</h1>
    </div>
    </div>
          <div className="contenedor-Planes">
          <div className='casilla-Planes'>
          <img src={ require('../Imagenes/Inicio/captura2.png')} alt="" />
          <div>
          <p>¿QUÉ ES UN PLAN PREVENTIVO DE SALUD? En NASU, procuramos prolongar al máximo la calidad de 
          vida de nuestras mascotas facilitando las visitas regulares y los procedimientos periódicos. 
          Por eso hemos creado nuestros Planes de Salud Preventiva. Un Plan de Salud no es un seguro médico. 
          Los seguros médicos cubren emergencias y enfermedades. Por ello, los adquirimos con la esperanza de 
          nunca tener que utilizarlos. En contraste, un Plan de Salud Preventiva contempla una variedad de 
          procedimientos diseñados y controlados por nosotros, los veterinarios, para mantener la salud de tus 
          mascotas, así como para identificar factores de riesgo de enfermedades y posibles alteraciones en 
          etapas tempranas. Estos procedimientos tienen una cobertura anual, con hasta 10 diferentes servicios 
          a lo largo de dicho período. Con NASU, el 100% de tu inversión en los Planes de Salud lo vas a utilizar
           en tu mascota. Otra diferencia con los seguros médicos es la accesibilidad que damos, gracias a un 
           sistema automático de pagos mensuales con el que facilitamos tu vida, de manera tal que cuando hagás 
           la visita preventiva al veterinario, no tengás que pagar allí el servicio. Nuestros planes desarrollan 
           su cobertura y atención en las clínicas veterinarias pertenecientes a la red NASU. Si el Médico 
           Veterinario de tu confianza no es aún miembro de nuestra red, vos podés invitarle a afiliarse.</p>
           <button style={{background: 'rgb(77, 184, 196)', padding: '10px 50px', color: 'white', borderRadius: '25px', border: 'none'}}>ESCOGER PLANES DE SALUD</button>
             </div>
          </div>       

          <div className='casilla-Planes-Left casilla-Planes'>          
          <img className='img-left' src={ require('../Imagenes/Inicio/captura2.png')} alt="" />
          <div className="text-container-Planes-Left">
          <p>¿EN QUÉ CONSISTEN NUESTROS PLANES DE SALUD? PLANES DE SALUD EN GATITOS: Pocas emociones son tan 
          fuertes y hermosas como recibir en el hogar gatito como nuevo miembro de nuestra familia. Durante el 
          primer año nuestro gatito crece un equivalente a los primeros 18 años de un ser humano. Esto es un 
          crecimiento muy acelerado, por lo que las recomendaciones y consejos de tu médico veterinario son 
          fundamentales para garantizar su salud de manera adecuada. En esta etapa cobra especial interés las 
          vacunaciones contra enfermedades virales, así como el control periódico de parásitos internos y externos. 
          PRECIOS DESDE: ₡ 12.000</p>
          <div className="button-container-Planes-Left">
          <button>ESCOGER PLANES DE SALUD</button>
          </div>
          </div>
          <div className="image-container-Planes-Left">
          <img className='img-gone' src={ require('../Imagenes/Inicio/captura2.png')} alt="" />
          </div>
        </div>


          


          <div className='casilla-Planes'>
          <img src={ require('../Imagenes/Inicio/captura2.png')} alt="" />
          <div>
          <p>PLANES DE SALUD EN MASCOTAS MAYORES DE UN AÑO: a partir del primer año de vida, nuestras mascotas 
          son adultos y por los próximos 8 años debemos cuidarlos con servicios médicos diferentes a los que les 
          proporcionamos cuando eran cachorros menores de una año. Así como en la etapa anterior, los médicos 
          veterinarios sabemos que servicios son esenciales para mantener la salud a largo plazo y qué exámenes 
          debemos realizar para comprobar que nuestra mascota se encuentre saludable. Atender las indicaciones y 
          citas periódicas con su veterinario le traerá la mayor tranquilidad a usted como dueño responsable al 
          saber que su mascota esté bajo el control del profesional que más se preocupa por ellos: el médico 
          veterinario. En esta etapa debemos mantener activa la inmunidad contra enfermedades virales, el 
          tratamiento contra enfermedades parasitarias y muy especialmente iniciar un plan regular de cuidado 
          oral a través de las debidas limpiezas dentales profesionales. PRECIOS DESDE: ₡ 7.650</p>
          <button style={{background: 'rgb(77, 184, 196)', padding: '10px 50px', color: 'white', borderRadius: '25px', border: 'none'}}>ESCOGER PLANES DE SALUD</button>
          </div>
          </div>   

          <div className='casilla-Planes-Left casilla-Planes'>          
          <img className='img-left' src={ require('../Imagenes/Inicio/captura2.png')} alt="" />
          <div className="text-container-Planes-Left">
          <p>PLANES DE SALUD EN ANIMALES GERIATRICOS: Superados los primeros 9 años de nuestras mascotas, nos 
          enfocaremos en cuidarlas como mascotas geriátricas. Sus años dorados nos recuerdan que los cuidados 
          de salud son aún más importantes para diagnosticar tempranamente cualquier enfermedad. Los veterinarios 
          ofrecemos una serie de servicios y exámenes que nos permitirán cumplir ese objetivo. Te corresponde a 
          vos como dueño responsable tener un plan de salud geriátrica para tu mascota. Y a NASU, llevar ese 
          control para tu tranquilidad. En esta etapa de la vida de tu mascota, los exámenes de sangre que nos 
          informen de su estado interno, así como la realización de ultrasonido o control cardiológico, cobran
          mucha importancia. PRECIOS DESDE: ₡ 9.400</p>
          <div className="button-container-Planes-Left">
          <button>ESCOGER PLANES DE SALUD</button>
          </div>
          </div>
          <div className="image-container-Planes-Left">
          <img src={ require('../Imagenes/Inicio/captura2.png')} alt="" />
          </div>
        </div>
                </div>
                <InicioScroll />
                </div>               
    
  );
};

export default PlanesdeSalud;
