import React, { useContext, useState } from "react";

const ItemCount = ({stock, inicial, onAdd}) => {
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
    function clicker () {
        onAdd(count)
        setCount(inicial)
    }
    return(
        <div className="contadorPadre">
            <div className="contador">
                 <button onClick={restar} className="botonContador">-</button>
                 <p className="numeroContador">{count}</p>
                 <button onClick={sumar} className="botonContador">+</button>
            </div>
            <button onClick={clicker} className="agregarContador ">Agregar al Carrito</button>
        </div>
    )
}
export default ItemCount