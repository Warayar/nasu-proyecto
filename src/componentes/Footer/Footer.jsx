import React from 'react'
import './Footer.css';
import { FaDollarSign } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='footer'>
        <div className='sb_footer section_padding'>
            <div className='sb_footer-links' style={{textAlign: 'center'}}>

            <div className='sb_footer-links_divl'>
            <FaDollarSign className='fa' style={{fontSize: '50px', color: 'white', margin: '10px'}} />
            <h4>PAGO CON TARJETA</h4>
            <p>Aceptamos todas las tarjetas de crédito</p>
            </div>

            <div className='sb_footer-copyright'>            
            <p >Políticas y privacidad  | Términos y condiciones</p>
            <FaFacebookSquare style={{color: 'white',fontSize: '30px', margin: '10px'}}/>
            <p > Derechos reservados &copy; {new Date().getFullYear()} NASU</p>
            </div>

            <div className='sb_footer-links_divr'>
            <FaLock className='fa' style={{fontSize: '50px', color: 'white', margin: '10px'}}/>
            <h4>SEGURIDAD CON BAC CREDOMATIC</h4>
            <p>Nuestra plataforma de pago cuenta con el respaldo de Credomatic.</p>
            </div>
            </div>

            </div>
            </div>
            
  )
}

export default Footer;