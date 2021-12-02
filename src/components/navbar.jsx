import React from 'react';
import CartWidget from './CartWidget';
function NavBar(){
    const navBarEstilo = {width: '100vw', height: '8vh', backgroundColor:'#000', color: '#fff', listStyleType:'none', position:'relative', top: 0, left: 0, display: 'grid', gridTemplateColumns:'1fr 1fr 0.3fr', gridTemplateRows: '1fr', gridTemplateAreas:`'nombre nav carrito'`}
    const logoEstilo = {gridArea: 'nombre', display:'block', textAlign:'center'}
    const navEstilo = {gridArea: 'nav', fontSize: 20, display:'block', display:'flex',flexFlow:'row nowrap', textAlign:'center'}
    const listaEstilo = {color:'#fff',listStyleType: 'none', margin:20}
    const linkEstilo = {color:'#fff', textDecoration:'none'}
    const carritoEstilo={gridArea: 'carrito'}
    return (
        <div style={navBarEstilo}>
            <h2 style={logoEstilo}>Proyecto Final</h2>
            <ul style={navEstilo}>
                <li style={listaEstilo}><a href="#" style={linkEstilo}>INICIO</a></li>
                <li style={listaEstilo}><a href="#" style={linkEstilo}>SOBRE</a></li>
                <li style={listaEstilo}><a href="#" style={linkEstilo}>TIENDA</a></li>
                <li style={listaEstilo}><a href="#" style={linkEstilo}>CONTACTO</a></li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar