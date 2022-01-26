import { Link } from "react-router-dom"
import React from "react"
const Item = ({item}) => {
    const ColorTextoStyle = {color:'#000', textDecoration:'none'}
    if(item.stock==0){ // Por si no hay Stock
        return(
            <div key={item.id} className="divProductos">
                <img src={item.image} className="imgList"/>
                <h1 className="tituloProducto" style={ColorTextoStyle}>{item.name}</h1>
                <h2 className="sinStock">{item.price}AR$</h2>
                <h3 className="sinStock">SIN STOCK</h3>
            </div>
        )
    }else{
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

}
export default Item