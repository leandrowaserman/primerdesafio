
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount"
const ItemDetail = ({item}) =>  {
    const {cartList, addItem} = useContext(CartContext)
    const [buyLink, setBuyLink] = useState(true)
    function onAdd (cant){
        console.log(cant)
        addItem({...item, quantity:cant})
        setBuyLink(false)
    }
    console.log(cartList)
    return(
        <div className="detail">
            <div className="imgDetailDiv">
                <img src={item.image} className="imgDetail"/>
            </div>
            <div className="textoDetail">
                <h2 className="detailTitulo">{item.name}</h2>
                <p className="descripcion">{item.description}</p>
                <p className="stock">Stock disponible: {item.stock}</p>
                {buyLink ? 
                <ItemCount stock={item.stock} onAdd={onAdd} />
                 : 
                 <Link to="/cart" className="finalizarCompra">Ir al Carrito</Link>}
            </div>

        </div>
    )
}
export default ItemDetail