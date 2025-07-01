import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './styleEstatico.css'
import Cart from '../Cart'


const Header = () => {
  const [isCartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <NavLink className="navbar-brand logo" to="/">
        <img className="logo" src="/logo.png" alt="Logo Ferromodelismo" />
      </NavLink>

      
      <nav>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

          <li className="nav-item">
            <NavLink className="link" to="/">Inicio</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="link" to="/acercade">Nosotros</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="link" to="/productos">Productos</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="link" to="/contacto">Contacto</NavLink>
          </li>

          <li className="nav-item">
            <button className='btnCart' onClick={() => setCartOpen(true)}><i className="fa-solid fa-cart-shopping"></i></button>
            <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
          </li>

          <li className="nav-item">
            <NavLink className="link" to="/admin">
              <i className="fa-solid fa-user-tie"></i>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="link" to="/login">
              <i className="fa-solid fa-right-to-bracket"></i>
            </NavLink>
          </li>

        </ul>

      </nav>
    </header>
  )
}

export default Header
