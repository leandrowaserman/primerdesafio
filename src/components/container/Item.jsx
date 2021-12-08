import React from "react"
import ItemCount from "../ItemCount"
const Item = ({item}) => {
    const ColorTextoStyle = {color:'#000'}
    {item.categoria.charAt(0).toUpperCase()}
    return(
        <div key={item.id} className="divProductos">
            <h1 className="tituloProducto" style={ColorTextoStyle}>{item.categoria} {item.color}</h1>
            <img src={item.imagen}/>
            <p className="stock" style={ColorTextoStyle}>Stock: {item.stock}</p>
            <ItemCount stock={item.stock} inicial={0} />
        </div>
    )
}
export default Item