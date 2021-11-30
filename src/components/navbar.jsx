import React from 'react';
function NavBar(){
    const navBarEstilo = {width: '100vw', height: '8vh', backgroundColor:'#000', color: '#fff', display: 'grid', gridTemplateRows: '1fr', gridTemplateColumns: '1fr 1fr', gridTemplateAreas: 'nombre nav'}
    const navEstilo = {gridArea: 'nav', listStyle: 'none', fontSize: 20}
    const logoEstilo = {gridArea: 'nombre'}
    return (
        <div style={navBarEstilo}>
            <h2 style={logoEstilo}>Proyecto Final</h2>
            <ul style={navEstilo}>
                <li><a href="#">INICIO</a></li>
                <li><a href="#">SOBRE</a></li>
                <li><a href="#">TIENDA</a></li>
                <li><a href="#">CONTACTO</a></li>
            </ul>
        </div>
    )
}

export default NavBar