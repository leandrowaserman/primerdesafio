import { createContext, useEffect, useState} from "react";

export const CartContext = createContext([])

function CartContextProvider({children}){
    const [cartList, setCartlist] = useState([])
    useEffect (()=>{},[cartList])
    function addItem (item) {
        const index = cartList.findIndex(i=>i.id===item.id)
        if(index>=0){
            const oldItem = cartList[index].quantity
            cartList.splice(index, 1)
            setCartlist([...cartList, {...item, quantity: item.quantity + oldItem}])
        }
        else{
            setCartlist([...cartList, item])
        }
    }
    function totalQuantity (){
        const newQuantity = cartList.reduce((x, y) => x + y.quantity, 0)
        return newQuantity
    }
    function clear (){
        setCartlist([])
    }
    function removeItem(item){
        const index = cartList.filter((i)=>i.id!==item)
        setCartlist(index)
    }
    function totalPrice (){
        const total = cartList.reduce((x, y) => x + y.quantity * y.price, 0)
        return  total
    }
    
    return(
        <CartContext.Provider value={{cartList, addItem, clear, removeItem, totalQuantity, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider