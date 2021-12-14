import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import getItems from "./services/data";
const ItemDetailContainer = () =>{
    const [item, setItem] =useState({})
    useEffect(()=>{
        getItems
        .then((resp)=>{
            setItem(resp.find((items) =>items.id===1))
        })
    },[])
    return(
        <ItemDetail item={item}/>
    )
}
export default ItemDetailContainer