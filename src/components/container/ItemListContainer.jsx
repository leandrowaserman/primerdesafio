import React, { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import {collection, getFirestore, getDocs, query, where} from "firebase/firestore"
function ItemListContainer (){
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCate} = useParams()
    useEffect(()=>{
        const db = getFirestore()
        if(idCate){
            const querycollection= query(collection(db,'items'), where ('categoria', '==', idCate))
            getDocs(querycollection)
            .then(resp=>setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        }else{
            const itemcollection = collection(db, 'items')
            getDocs(itemcollection)
            .then(resp=>setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch (err => console.log(err))
            .finally(()=>setLoading(false))
        }
        

    },[idCate])
    return(
        <section className="seccionProductos">
        {loading ?
            <h2> Cargando... </h2>
            :         <ItemList items={productos}/>
        }
        </section>
    )
}
export default ItemListContainer
