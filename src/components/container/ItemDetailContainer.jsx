import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { TailSpin } from  'react-loader-spinner'

const ItemDetailContainer = () =>{
    const [item, setItem] =useState({})
    const [loading, setLoading]= useState(true)
    const {id} = useParams()

    useEffect(()=>{
        const db = getFirestore()
        const querydb = doc(db, 'items', id)
        getDoc(querydb)
        .then(resp=>setItem({id: resp.id, ...resp.data()}))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    },[id])

    return(
        <>{loading ?
            <div className="loadingSpin"><TailSpin color="#000" height={80} width={100} /></div>
             
             : <ItemDetail item={item}/>}
        </>
        
    )
}
export default ItemDetailContainer