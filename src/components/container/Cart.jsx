import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, getFirestore, Timestamp, updateDoc, writeBatch } from "firebase/firestore";
import CartForm from "./CartForm";

const Cart = () => {
    const {cartList, clear, removeItem, totalQuantity, totalPrice} = useContext(CartContext)
    const [idOrder, setIdOrder] = useState('')
    const [infoForm, setInfoForm] = useState({name:"", email:"", phone:""})
    
    if(totalQuantity()===0){
        return(
            <>
            <h2>Carrito Vacio</h2>
            <Link to="/">Volver al menú</Link>
            </>
        )
    } else{
        return(
            <>
            <table className="tablaComprar">
                <thead>
                <tr>
                    <th className="tabla">{idOrder.length !== 0 && idOrder}</th>
                    <th className="tabla">Nombre</th>
                    <th className="tabla">Precio</th>
                    <th className="tabla">Cantidad</th>
                    <th className="tabla"></th>
                </tr>
                </thead>
                <tbody>
                {cartList.map((item=> <>
                <tr>
                    <td className="tabla"><img src={item.image} className="imgCart"/></td>
                    <td className="tabla">{item.name}</td>
                    <td className="tabla">{item.price}</td>
                    <td className="tabla">{item.quantity}</td>
                    <td className="tabla"><button onClick={()=>removeItem(item.id)}>X</button></td>
                </tr>
                </>))}
                </tbody>
            </table>
            <button onClick={clear}>Vaciar Carrito</button>
            <h4>Precio total: {totalPrice()}</h4>
            <CartForm />
            </>   
        )
    }

}
export default Cart
