import { Link } from "react-router-dom"
import React from "react"
const Item = ({item}) => {
    const ColorTextoStyle = {color:'#000', textDecoration:'none'}
    return(
        <div key={item.id} className="divProductos">
            <Link to={`/item/${item.id}`} className="linkItem">
            <img src={item.image} className="imgList"/>
            <h1 className="tituloProducto" style={ColorTextoStyle}>{item.name}</h1>
            <h2 className="precioList">{item.price}AR$</h2>
            <h3 className="detallesList">Ver detalles</h3>
            </Link>
        </div>
    )
}
export default Item