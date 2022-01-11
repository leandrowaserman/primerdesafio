import React, {useState } from "react";

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount]= useState(1)
    const add = () => {
        if(count==stock){
            return count
        }else{
            setCount(count+1)
        }
    }
    const substract = () => {
        if(count==inicial){
            return count
        } else{
            setCount(count-1)
        }
    }
    function clicker () {
        onAdd(count)
        setCount(1)
    }
    return(
        <div className="contadorPadre">
            <div className="contador">
                 <button onClick={substract} className="botonContador">-</button>
                 <p className="numeroContador">{count}</p>
                 <button onClick={add} className="botonContador">+</button>
            </div>
            <button onClick={clicker} className="agregarContador ">Agregar al Carrito</button>
        </div>
    )
}
export default ItemCount