import React from "react"
import ItemCount from "../ItemCount"
const ItemDetail = ({item}) =>  {
    return(
        <div className="detail">
            <div className="imgDetailDiv">
                <img src={item.imagen} className="imgDetail"/>
            </div>
            <div className="textoDetail">
                <h2 className="detailTitulo">{item.categoria} {item.color}</h2>
                <p className="descripcion">{item.descripcion}</p>
                <p className="stock">Stock disponible: {item.stock}</p>
                <ItemCount stock={item.stock} inicial={1}/>
            </div>

        </div>
    )
}
export default ItemDetail