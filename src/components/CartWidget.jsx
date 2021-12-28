import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import carrito from './imgs/carrito.png'
function CartWidget () {
    const carritoStyle={width:50, textAlign:'center', paddingTop:27}
    const {quantity} = useContext(CartContext)
    return(
        <div className='cartWidget'>
        <img src={carrito} style={carritoStyle}/>
        {quantity()===0 ? <span></span> : <div className='cantidadCarrito'>{quantity()}</div>}
        </div>
    )
}
export default CartWidget