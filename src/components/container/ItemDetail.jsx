
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount"
const ItemDetail = ({item}) =>  {
    const {cartList, addItem} = useContext(CartContext)
    const [buyLink, setBuyLink] = useState(true)
    function onAdd (cant){
        console.log(cant)
        addItem({...item, cantidad:cant})
        setBuyLink(false)
    }
    console.log(cartList)
    return(
        <div className="detail">
            <div className="imgDetailDiv">
                <img src={item.imagen} className="imgDetail"/>
            </div>
            <div className="textoDetail">
                <h2 className="detailTitulo">{item.categoria} {item.color}</h2>
                <p className="descripcion">{item.descripcion}</p>
                <p className="stock">Stock disponible: {item.stock}</p>
                {buyLink ? 
                <ItemCount stock={item.stock} inicial={1} onAdd={onAdd} />
                 : 
                 <Link to="/cart" className="finalizarCompra">Ir al Carrito</Link>}
            </div>

        </div>
    )
}
export default ItemDetail