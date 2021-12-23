import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const {cartList, clear, removeItem} = useContext(CartContext)
    return(
        <>
        {cartList.map((item => <div> <h2>{item.categoria}{item.color}</h2> <h3>{item.cantidad}</h3><button onClick={()=>removeItem(item.id)}>X</button></div>))}
        <button onClick={clear}>Vaciar Carrito</button>
        </>
    )
}
export default Cart