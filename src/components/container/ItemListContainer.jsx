import React, { useEffect, useState } from "react"
import ItemList from "./ItemList"
import getItems from "./services/data"
import { useParams } from "react-router-dom"

function ItemListContainer(){
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCate} = useParams()
    useEffect(()=>{
        if(idCate){
            getItems
            .then(resp=>setProductos(resp.filter(prod=>prod.categoria.toLowerCase() ===  idCate)))
            .catch (err => console.log(err))
            .finally(()=>setLoading(false))
        }
        else{
            getItems
            .then(resp=>setProductos(resp))
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
