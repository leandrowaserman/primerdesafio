import React from 'react';
function ItemListContainer ({mensaje}){
    const mensajeEstilo = {color:'#000', textAlign:'center'}
    return(
        <h2 style={mensajeEstilo}>{(mensaje)}</h2>
    )
}
export default ItemListContainer