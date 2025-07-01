import {useContext} from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'

import { CartContext } from '../context/CartContext';

const GaleriaDeProductos = () => {

  const {cargando} = useContext(CartContext);

  return (
    <>
      <Header />

      {
        cargando ? (<p style={{ alignContent: 'center' }}> trayendo productos ... <img src={loading} alt='loading' /> </p>) :

          <ProductList />
      }

      <Footer />
    </>
  )
}

export default GaleriaDeProductos

