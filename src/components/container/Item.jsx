import React from "react"
const Item = ({item}) => {
    const ColorTextoStyle = {color:'#000'}
    return(
        <div key={item.id} className="divProductos">
            <h1 className="tituloProducto" style={ColorTextoStyle}>{item.categoria} {item.color}</h1>
            <img src={item.imagen} className="imgList"/>
        </div>
    )
}
export default Item