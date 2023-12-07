import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoPawOutline } from 'react-icons/io5';
import InicioScroll from './InicioScroll';
import '../estilos/Inicio.css';

const Inicio = () => {
    document.title = "Inicio";
    return (
        <div className="container-Inicio">
            <div className="with-image-Inicio">
                <div className="content-Inicio">
                    <h1>PLANES DE VIDA SALUDABLE</h1>
                    <p>Somos facilitadores en primera línea para llevar salud a las mascotas y tranquilidad a tu 
                        familia. Por eso diseñamos planes de vida para el bienestar de tus mascotas a través de la 
                        tecnología, la conveniencia y la empatía.
                        PRECIOS DESDE ₡ 7.650 PARA GATOS Y ₡ 7.800 PARA PERROS</p>
                    <NavLink to='/planes_de_salud'><button>Que son Planes de Salud?</button></NavLink>
                </div>
            </div>

            <div className="Segunda-section">

                <div className="image-container">
                    <img src={require('../Imagenes/Inicio/captura2.png')} alt="" />
                    <div className="image-content">
                        <h2>ESCOGÉ EL PLAN PARA TU MASCOTA</h2>
                        <p>Escogé el plan de salud que mejor se adapta a las necesidades de tu mascota.</p>
                        <NavLink to='/planes_de_salud'><button>ESCOGER PLANES DE SALUD</button></NavLink>
                    </div>
                </div>

                <div className="image-container">
                    <img src={require('../Imagenes/Inicio/captura3.png')} alt="" />
                    <div className="image-content">
                        <h2>NUESTRA RED DE CLÍNICAS</h2>
                        <p>Busque la clínica veterinaria más conveniente</p>
                        <button>VER CLINICAS VETERINARIAS</button>
                    </div>
                </div>

                <div className="image-container">
                    <img src={require('../Imagenes/Inicio/captura4.png')} alt="" />
                    <div className="image-content">
                        <h2>INSCRIBA SU CLINICA</h2>
                        <p>¿Es Usted Médico Veterinario? Forme parte de la red de profesionales médicos veterinarios de NASU, de manera sencilla y rápida.</p>
                        <button>INSCRIBIR MI CLINICA</button>
                    </div>
                </div>
            </div>
            <div className="Tercera-section">
            <h2>¿Qué es NASU?</h2>
            <p>NASU es un facilitador entre los propietarios, sus mascotas y los veterinarios.</p>
            <p>No somos un seguro. Somos un sistema de planes de medicina preventiva para las mascotas, en el cual procuramos una mejor salud para ellas, con la conveniencia de pagos automáticos en cuotas mensuales.</p>
            <NavLink to='/que_es_nasu'><button>CONOZCA MAS DE NASU!</button></NavLink>
        </div>


        <div className="cuarta-section">
        <div className="cuarta-image">
        <img src={require('../Imagenes/Inicio/captura6.png')} alt="" />
        </div>

        <div className="cuarta-content">
            <h2>¿Qué obtenés vos y tu Mascota con NASU?</h2>
            <ul>
                <li><IoPawOutline  /> Diferentes Planes de Salud según tu presupuesto y las necesidades de tus mascotas</li>
                <li><IoPawOutline  /> Precios competitivos, DESDE ₡ 7.650 PARA GATOS Y ₡ 7.800 PARA PERROS</li>
                <li><IoPawOutline  /> Escoger la clínica veterinaria por cercanía o calificación</li>
                <li><IoPawOutline  /> Citas automáticas a través de nuestro Sitio Web</li>
                <li><IoPawOutline  /> Visualización en tu celular de los planes de tus mascotas, citas y próximas visitas</li>
                <li><IoPawOutline  /> Pagos en cuotas mensuales automáticos a tu tarjeta de crédito o débito con la seguridad bancaria que requerís</li>
            </ul>
        </div>
    </div>


    <div className="quinta-section">
    <div className="quinta-background">
    <img src={require('../Imagenes/Inicio/captura7.png')} alt="" />
    </div>

    <div className="quinta-content">
        <h2>BENEFICIOS</h2>
        <ul>
            <li><IoPawOutline /> Diferentes planes de Medicina Preventiva según tus necesidades</li>
            <li><IoPawOutline /> Cobertura anual para cada una de tus mascotas: hasta 10 diferentes servicios a lo largo del período</li>
            <li><IoPawOutline /> Posibilidad de seguir yendo a la misma clínica veterinaria de tu preferencia</li>
            <li><IoPawOutline /> Pagos electrónicos automáticos mensuales, sin preocuparte por olvidos involuntarios</li>
            <li><IoPawOutline /> Donamos a la Asociación Animales de Asís para el cuido de animales de la calle</li>
        </ul>
        <NavLink to='/planes_de_salud'><button>NUESTROS PLANES DE SALUD</button></NavLink>
    </div>
    
</div>

<div>
    {/* Sexta-section */}
    <div className="sexta-section">
        <h2>LA VOZ DE NUESTROS CLIENTES</h2>
        <p>Nuestros usuarios te cuentan su opinión sobre el uso y facilidades que les ha brindado NASU en sus vidas.</p>
    </div>

    {/* Septima-section */}
    <div className="septima-section">
        <div className="septima-card">
        <img src={require('../Imagenes/Inicio/captura10.png')} alt="" />
            <h3>RITA ARGUEDAS</h3>
            <p>"Nasu es lo que siempre desee que existiera para mantener mis mascotas sanas con la tranquilidad de recibir el seguimiento de sus citas a través del sitio Web.</p>
        </div>
        <div className="septima-card">
        <img src={require('../Imagenes/Inicio/captura9.png')} alt="" />
            <h3>FLOR EMILIA VIQUEZ</h3>
            <p>"Gracias a Nasu, mi perra Simba va al veterinario hasta 5 veces al año sin pagar de más."</p>
        </div>
        <div className="septima-card">
        <img src={require('../Imagenes/Inicio/captura8.png')} alt="" />
            <h3>MARIO RODRIGUEZ</h3>
            <p>"Por mi estilo de vida, olvidaba llevar a mi gata Merceditas al veterinario cuando le tocaba. Ahora estoy tranquilo porque Nasu lleva ese control por mí y mi familia"</p>
        </div>
    </div>
</div>


<div className="octava-section">
<div className="octava-background">
<img src={require('../Imagenes/Inicio/captura5.png')} alt="" />
</div>

<div className="octava-content">
<p>Con tu membresía a NASU hacés una importante donación a:</p>
    <img src={require('../Imagenes/Inicio/captur11.png')} alt="" />
    <p>Para el cuidado y rescate de los animales de la calle.</p>
    <NavLink to='/quinta_section'><button>CONOCER MAS</button></NavLink>
</div>
</div>
<InicioScroll />

        </div>
    );
};

export default Inicio;
