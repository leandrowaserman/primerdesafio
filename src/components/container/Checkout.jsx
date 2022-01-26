import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection, getFirestore, Timestamp} from "firebase/firestore";
import { Link } from "react-router-dom";
const Checkout = () =>{
    const {cartList, totalPrice, clear, totalQuantity} = useContext(CartContext)
    const [infoForm, setInfoForm] = useState({name:"", email:"", phone:""})
    const [idOrder, setIdOrder] = useState('')
    const handleChange = (e) => {
        setInfoForm({
            ...infoForm,
            [e.target.name]: e.target.value
        })
    }
    const orderGenerator = (e) =>{
        e.preventDefault()
        let order = {}
        order.date = Timestamp.fromDate(new Date())
        order.buyer = infoForm
        order.total=totalPrice()
        order.items= cartList.map(cartItem=>{
            const id= cartItem.id
            const name = cartItem.name
            const price = cartItem.price * cartItem.quantity
            return {id, name, price}
        })
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order)
        .then(resp => setIdOrder(resp.id))
        .catch(err=>console.log(err))
        .finally(()=>{
            setTimeout(()=>{
                clear()
                setInfoForm({
                    name:"", email:"", phone:""
                })
            },400)
        })
    }
    if(totalQuantity()===0 && !idOrder) { // Esto lo hago por si alguien va directamente a la ruta /checkout
        return(
            <main className="noItems">
            <h2 className="emptyh2">Carrito Vacio</h2>
            <Link to="/" className="emptyLink">Volver al menú</Link>
            </main>
        )   
    }else if(idOrder){ // Esto para detectar si hay una orden generada y retornar el Id
        return(
            <main className="idOrderReturn">
            <h2 className="thanks">¡Gracias por Comprar!</h2>
            <p className="orderId">Su ID de Compra es: {idOrder}</p>
            <Link to="/" className="emptyLink">Seguir Comprando</Link>
            </main>
        )
    }else{
        return(
            <main className="formSuperior">
            <form onSubmit={orderGenerator} onChange={handleChange} className="checkoutForm">
                <h2>Escriba sus Datos</h2>
                <input type="text" name="name" placeholder="Nombre" defaultValue={infoForm.name} className="inputCheckout" required/>
                <br />
                <input type="text" name="phone" placeholder="Telefono" defaultValue={infoForm.phone} className="inputCheckout" required/>
                <br />
                <input type="email" name="email" placeholder="Email" defaultValue={infoForm.email} className="inputCheckout" required/>
                <input type="email" name="emailConfirm" placeholder="Confirme su Email" defaultValue={infoForm.emailConfirm} className="inputCheckout" required/>
                <div className="formButtons">
                    <button disabled={infoForm.email !== infoForm.emailConfirm} className="enviarCompra">Finalizar Compra</button>
                    <button className="return"> <Link to="/cart">Volver al Carrito</Link></button>
                </div>
                <h3>Precio final: {totalPrice()}AR$</h3>        
            </form>
    
            </main>
        )
    }
}
export default Checkout