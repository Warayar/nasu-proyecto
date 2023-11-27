import React from 'react';
import './QueEsNasu.css';
import InicioScroll from './InicioScroll';

    const QueEsNasu = () => {
        document.title = "¿Quiénes somos?";
        return (
            <div className="container-Que_es_Nasu">
              <div className="with-image-Que_es_Nasu">
                <div className="content-Que_es_Nasu">
                  <h1>¿Quiénes somos?</h1>
            </div>
            </div>
                  <div className="contenedor-Que_es_Nasu">
                  <h1>Amar es Prevenir</h1>
                  <p>Su bienestar es nuestra necesidad. Porque cuando podemos confiar en que estarán bien, nuestra vida se llena de tranquilidad.</p>
                  <div className='casilla-Que_es_Nasu'>
                  <img src={ require('../Imagenes/Inicio/captura2.png')} alt="" />
                  <div>
                  <h1>Nuestro <span class="h1color"> Propósito</span></h1>
                  <p>Creemos en el amor por las mascotas. Existimos para apoyar la prevención y el bienestar. La nuestra
                   es una historia de confianza que inició hace mucho tiempo. Una relación que trascendió a la 
                   utilidad para completar nuestras vidas. Una aventura que nos llena de emociones y se ha ganado 
                   nuestro corazón y nuestras familias. Somos empáticos a sus estados de ánimo: estamos bien si 
                   ellos están bien; nos sentimos mal si ellos están mal. La confianza que han puesto en vos es 
                   profunda: sos parte de su manada y ellos lo son de tu familia. Un vínculo nacido a primer olfato.
                    Para vos el amor tiene su propio nombre: Oreo, Bolita, Sandro, Kity, Cacao, Sammy, Marley, Luki,
                     Doggie, Tigra, Tom, Canelo, Suri, Nani, Pati, Corcho, Skinny… Queremos que la conexión y la 
                     confianza también tengan nombre: NASU, el apoyo que buscás Junto a Tu Mascota.</p>
                     </div>
                  </div>       
                  
                  <div className='casilla-Que_es_Nasu'>
                  <img src={ require('../Imagenes/Inicio/captura2.png')} alt="" />
                  <div>
                  <h1>Nuestra <span class="h1color">  Visión y Misión</span></h1>
                  <p>Somos la plataforma de Clínicas Veterinarias más grande de su región, ofreciendo Planes de 
                  Salud y Bienestar para Tus mascotas a través de la tecnología y la conveniencia. Nuestra MISION 
                  es Proveer una vida sana y prolongada a las mascotas a través de planes de medicina preventiva.</p>
                     </div>
                  </div>    

                  <div className='casilla-Que_es_Nasu'>
                  <img src={ require('../Imagenes/Inicio/captura2.png')} alt="" />
                  <div>
                  <h1>Promesa <span class="h1color">  de Valor</span></h1>
                  <p>Prolongar el bienestar de las mascotas es nuestro deseo. Asumimos el amor con un compromiso
                   de mantenerlos seguros y sanos. Nuestra empatía nos impulsa a dar lo mejor de nuestros 
                   conocimientos para facilitar las conexiones que te permitan cuidar de ellos. Nuestra 
                   promesa es facilitarte la atención de medicina preventiva para cada una de tus mascotas.</p>
                     </div>
                  </div>    
                        </div>
                        <InicioScroll />
                        </div>               
            
        );
      };
      
      export default QueEsNasu;
      