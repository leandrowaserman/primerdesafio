import { Link } from 'react-router-dom';
import React from 'react';
import CartWidget from './CartWidget';
function NavBar(){
    const navBarEstilo = {width: '100vw', height: '8vh', backgroundColor:'#000', color: '#fff', listStyleType:'none', position:'relative', top: 0, left: 0, display: 'grid', gridTemplateColumns:'1fr 1fr 0.3fr', gridTemplateRows: '1fr', gridTemplateAreas:`'nombre nav carrito'`}
    const logoEstilo = {gridArea: 'nombre', display:'block', textAlign:'center', textDecoration:'none'}
    const navEstilo = {gridArea: 'nav', fontSize: 20, display:'block', display:'flex',flexFlow:'row nowrap', textAlign:'center'}
    return (
        <div className='navbar'>
            <h2 style={logoEstilo} className='titulo'> <Link to="/" className='tituloLetras'>Proyecto Final</Link></h2>
            <ul style={navEstilo}>
                <li className='listaLink'><Link to="/categoria/remera"  className='linkNav'>Remeras</Link></li>
                <li className='listaLink'><Link to="/categoria/gorra"  className='linkNav'>Gorras</Link></li>
            </ul>
            <Link to ="/cart" className='carritoNav'><CartWidget /></Link>
        </div>
    )
}

export default NavBar