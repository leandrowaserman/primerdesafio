import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
const ItemCount = ({stock, inicial, onAdd}) => {
    const [count, setCount]= useState(inicial)
    const [comprar, setComprar] =useState(true)
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
        setComprar(false)
    }
    return(
        <>{
            comprar===true ?
            <div className="contadorPadre">
                <div className="contador">
                     <button onClick={restar} className="botonContador">-</button>
                     <p className="numeroContador">{count}</p>
                     <button onClick={sumar} className="botonContador">+</button>
                </div>
                <button onClick={clicker} className="agregarContador ">Agregar al Carrito</button>
            </div>
            :
            <Link to ="/cart" className='finalizarCompra'> Finalizar la Compra </Link>
        }
       
        </>
    )
}
export default ItemCount