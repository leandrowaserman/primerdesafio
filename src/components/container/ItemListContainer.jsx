import React, { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import {collection, getFirestore, getDocs, query, where} from "firebase/firestore"
import { TailSpin } from  'react-loader-spinner'
function ItemListContainer (){
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCate} = useParams()
    useEffect(()=>{
        const db = getFirestore()
        const querycollection = idCate ?
         query(collection(db,'items'), where ('category', '==', idCate))
        :
         collection(db, 'items')
        getDocs(querycollection)
        .then(resp=>setItems(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        .catch (err => console.log(err))
        .finally(()=>setLoading(false))
    },[idCate])
    return(
        <section className="seccionProductos">
        {loading ?
            <TailSpin color="#000" height={80} width={100} />
            :         <ItemList items={items}/>
        }
        </section>
    )
}
export default ItemListContainer
