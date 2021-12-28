import { createContext, useEffect, useState} from "react";

export const CartContext = createContext([])

function CartContextProvider({children}){
    const [cartList, setCartlist] = useState([])
    useEffect (()=>{},[cartList])
    function addItem (item) {
        const index = cartList.findIndex(i=>i.id===item.id)
        if(index>=0){
            const oldItem = cartList[index].cantidad
            cartList.splice(index, 1)
            setCartlist([...cartList, {...item, cantidad: item.cantidad + oldItem}])
        }
        else{
            setCartlist([...cartList, item])
        }
    }
    function quantity (){
        const totalQuantity = cartList.reduce((x, y) => x + y.cantidad, 0)
        return totalQuantity
    }
    function clear (){
        setCartlist([])
    }
    function removeItem(item){
        const index = cartList.filter((i)=>i.id!==item)
        setCartlist(index)
    }
    
    return(
        <CartContext.Provider value={{cartList, addItem, clear, removeItem, quantity}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider