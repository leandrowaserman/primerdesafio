import React from 'react';
import carrito from './imgs/carrito.png'
function CartWidget () {
    const carritoStyle={width:50, textAlign:'center', paddingTop:27}
    return(
        <img src={carrito} style={carritoStyle}/>
    )
}
export default CartWidget