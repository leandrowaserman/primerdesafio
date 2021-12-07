import React, { useState } from "react";

const ItemCount = ({stock, inicial}) => {
    const [count, setCount]= useState(inicial)
    const sumar = () => {
        if(count==stock){
            return count
        }else{
            setCount(count+1)
        }
    }
    const restar = () => {
        if(count==inicial){
            return count
        } else{
            setCount(count-1)
        }
    }
    const agregar = () => {
        console.log ("Agregaste ", count, " items")
        setCount(inicial)
    }
    return(
        <div>
            <p>{count}</p>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={agregar}>Agregar al Carrito</button>
        </div>
    )
}
export default ItemCount