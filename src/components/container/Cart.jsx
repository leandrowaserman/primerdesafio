import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const {cartList, clear, removeItem, quantity} = useContext(CartContext)
    if(quantity()===0){
        return(
            <>
            <h2>Carrito Vacio</h2>
            <Link to="/">Volver al menú</Link>
            </>
        )
    } else{
        return(
            <>
            {cartList.map((item => <div>
                <img src={item.imagen} />
                 <h2>{item.categoria}{item.color}</h2>
                  <h3>{item.cantidad}</h3>
                  <button onClick={()=>removeItem(item.id)}>X</button>
                  </div>))}
            <button onClick={clear}>Vaciar Carrito</button>
            </>   
        )
    }

}
export default Cart