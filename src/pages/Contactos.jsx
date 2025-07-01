import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'

const Contactos = () => {
  return (
    <>
      <Header />
      <div className="p-4 my-3 border rounded shadow">
        <h2 className="mb-3">Contacto</h2>
        <p>
          <input type="text" id="nombre" name="nombre" placeholder='Nombre' required/>
        </p>
        <p>
          <input type="email" id="email" name="email" placeholder='Correo Electrónico' required/>
        </p>
        <p>
          <textarea id="mensaje" name="mensaje" rows="5" cols="50" placeholder='Su Mensaje' required></textarea>
        </p>
        <p>
          <button type="submit">Enviar</button>
        </p>
      </div>
      <Footer />
    </>
  )
}

export default Contactos
