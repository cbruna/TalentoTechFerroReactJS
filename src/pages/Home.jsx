import { useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'

import { CartContext } from '../context/CartContext'

const Home = () => {

  const {cargando} = useContext(CartContext) 

  return (
    <>
      <Header />
      <main>
        <h1>Talento Ferromodelismo</h1>
       
        <p>Modelismo ferroviario sólo para exigentes. Exclusivamente escala HO 1:87.</p>
        {
          cargando ? (<p style={{ alignContent: 'center' }}> trayendo productos ... <img src={loading} alt='loading' /> </p>) :

            <ProductList />
        }


      </main>



      <Footer />
    </>
  )
}

export default Home
