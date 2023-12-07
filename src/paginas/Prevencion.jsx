import InicioScroll from './InicioScroll';
import '../estilos/Prevencion.css';

const Prevencion = () => {
  document.title = "Pagina Prevencion";  

  return (
      <div className="container-Prevencion">
        <div className="with-image-Prevencion">
          <div className="content-Prevencion">
            <h1>¿Por qué es importante la prevención?</h1>
      </div>
      </div>
            <div className="contenedor-Prevencion">
            <h1>El amor por nuestras mascotas es una relación completa de empatía pura.</h1>
            <p className='blue'>Vos deseás los mejores servicios médicos que prolonguen la calidad de vida de tus mascotas. Sabemos que te podemos ayudar a conocer con detalle qué plan de medicina preventiva deberías seguir para mantener su salud.</p>
            <p className='blue'>Como profesionales en medicina veterinaria, hemos descubierto que el 90% de los propietarios de mascotas no agenda visitas al veterinario regularmente. Además, el 93% de los propietarios de mascotas delegan inconscientemente en el médico veterinario la responsabilidad de planear, implementar y recordar la siguiente visita de sus mascotas para los temas de salud.</p>
           <p className='gray'>¿Cada cuánto llevás a tu mascota al veterinario?</p>
           <p className='blue'>Las visitas periódicas al veterinario permiten un seguimiento adecuado de la salud de tu mascota para potenciar su calidad de vida, previniendo enfermedades y generando un estilo de vida lleno de bienestar. Además, las visitas preventivas dan oportunidad de detectar padecimientos de manera temprana, de tal manera que podás tratarlos siguiendo las recomendaciones de tu veterinario.</p>
           <p className='gray'>NASU tiene su enfoque en medicina preventiva, expectativa de vida y educación, para apoyarte a prolongar esos momentos de amor junto a tu mascota.</p>
                   
                  </div>
                  <InicioScroll />
                  </div>               
      
  );
};

export default Prevencion;
