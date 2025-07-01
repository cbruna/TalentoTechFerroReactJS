import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'

const AcercaDe = () => {
  return (
    <>
      <Header />
      <h2>Nosotros</h2>
      <p>Empresa familiar con más de 40 años de experiencia en modelismo ferroviario.</p>
      <p><img src='/nosotros.jpeg' alt='maqueta' /></p>
      <Footer />
    </>
  )
}

export default AcercaDe
