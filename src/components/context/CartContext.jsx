import { createContext, useState} from "react";

export const CartContext = createContext([])

function CartContextProvider({children}){
    const [cartList, setCartlist] = useState([])
    
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
    function clear (){
        setCartlist([])
    }
    function removeItem(item){
        const index = cartList.filter((i)=>i.id!==item)
        setCartlist(index)
    }
    return(
        <CartContext.Provider value={{cartList, addItem, clear, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider