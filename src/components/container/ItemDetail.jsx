import React from "react"
import ItemCount from "../ItemCount"
const ItemDetail = ({item}) =>  {
    return(
        <div className="detail">
            <hr />
            <h1>ITEM DETAIL</h1>
            <h2>{item.categoria} {item.color}</h2>
            <img src={item.imagen} className="imgDetail"/>
            <p className="descripcion">{item.descripcion}</p>
            <p className="stock">Stock disponible: {item.stock}</p>
            <ItemCount stock={item.stock} inicial={0} />
        </div>
    )
}
export default ItemDetail