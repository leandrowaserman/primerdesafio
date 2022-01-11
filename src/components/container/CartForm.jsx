import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection, doc, getFirestore, Timestamp, updateDoc, writeBatch } from "firebase/firestore";
const CartForm = () =>{
    const {cartList, totalPrice, clear} = useContext(CartContext)
    const [infoForm, setInfoForm] = useState({name:"", email:"", phone:""})
    const [bought, setBought] = useState(false)
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
        .then(resp => setIdOrder(resp.id), setBought(true))
        .catch(err=>console.log(err))
        .finally(()=>{
            setTimeout(()=>{
                clear()
                setInfoForm({
                    name:"", email:"", phone:""
                })
            },4000)
        })
    }
    return(
        bought ?
        <>
        <h2>¡Gracias por Comprar!</h2>
        <p>Su ID de Compra es: {idOrder}</p>
        </>
        :
        <form onSubmit={orderGenerator} onChange={handleChange}>
        <input type="text" name="name" placeholder="Nombre" value={infoForm.name}/>
        <br />
        <input type="text" name="phone" placeholder="Telefono" value={infoForm.phone}/>
        <br />
        <input type="email" name="email" placeholder="Email" value={infoForm.email}/>
        <button>Finalizar Compra</button>
    </form>
    )
    
}
export default CartForm