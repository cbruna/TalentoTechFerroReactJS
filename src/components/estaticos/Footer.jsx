import React from 'react'
import {NavLink} from 'react-router-dom'
import './styleEstatico.css'
const Footer = () => {
  return (
    <footer>

        <NavLink className="navbar-brand logo" to="/"> 
          <img className="logo" src="/logo.png" alt="Logo Ferromodelismo" />
        </NavLink> 
      
        <address>
            <p>La Fraternidad 777, San Isidro, Buenos Aires</p>
            <p>(11) 7777-7777</p>
            <p>contacto@talentoferromodels.com</p>
        </address>
       
        <p>&copy; 2025 - Talento Ferromodelismo | Todos los derechos reservados</p>
    </footer>
  )
}

export default Footer
