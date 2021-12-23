import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import getItems from "./services/data";
const ItemDetailContainer = () =>{
    const [item, setItem] =useState({})
    const [loading, setLoading]= useState(true)
    const {id} = useParams()
    useEffect(()=>{
        getItems
        .then((res)=>{
            const prod = res.find((i)=>i.id===parseInt(`${id}`));
            setItem(prod)
            setLoading(false)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[id])
    return(
        <>{loading ? <h1>Cargando...</h1> : <ItemDetail item={item}/>}</>
        
    )
}
export default ItemDetailContainer