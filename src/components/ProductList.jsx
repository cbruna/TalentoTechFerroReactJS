import { useContext } from 'react'
import Productos from './Productos'
import { CartContext } from '../context/CartContext'

const ProductList = () => {

    const {productosFiltrados, busqueda, setBusqueda } = useContext(CartContext)

    return (
        <>
           <h2>Productos</h2>
           <p>
            <input 
                type='text'
                placeholder='Buscar productos...'
                value={busqueda}
                onChange={(e)=> setBusqueda(e.target.value)}
                />
            </p>
            
            <div style={{marginTop: '5vh', display: 'flex', justifyContent: 'center', alignItems:'flex-end', flexWrap: 'wrap', gap: '10px'}}>
                {
                    productosFiltrados.map(producto => (
                        <Productos key={producto.id} producto={producto}/>
                    ))
                }
            </div>


        </>
    )
}

export default ProductList
