import { useContext} from "react";
import { Link} from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const {cartList, clear, removeItem, totalQuantity, totalPrice} = useContext(CartContext)
    const navigate = useNavigate()
    
    if(totalQuantity()===0){
        return(
            <main className="noItems">
            <h2 className="emptyh2">Carrito Vacio</h2>
            <Link to="/" className="emptyLink">Volver al menú</Link>
            </main>
        )
    } else{
        return(
            <>
            <table className="tablaComprar">
                <thead key="thead">
                <tr key="title">
                    <th className="tabla"></th>
                    <th className="tabla">Nombre</th>
                    <th className="tabla">Precio unidad</th>
                    <th className="tabla">Cantidad</th>
                    <th className="tabla"></th>
                </tr>
                </thead>
                <tbody key="tbody">
                {cartList.map((item=> <>
                <tr key={item.id}>
                    <td className="tabla"><img src={item.image} className="imgCart"/></td>
                    <td className="tabla">{item.name}</td>
                    <td className="tabla">{item.price}</td>
                    <td className="tabla">{item.quantity}</td>
                    <td className="tabla"><button onClick={()=>removeItem(item.id)} className="removeItem">X</button></td>
                </tr>
                </>))}
                </tbody>
            </table>
            <h4 className="totalPrice" key="totalPrice">Precio total: {totalPrice()}</h4>
            <div className="buttonsCart" key="buttonsCart">
                <button onClick={()=>{navigate('/checkout')}} className="buyCart">Comprar</button>
                <button onClick={clear} className="emptyCart">Vaciar Carrito</button>
            </div>
            
            
            </>   
        )
    }

}
export default Cart
