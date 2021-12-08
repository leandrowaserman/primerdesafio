import React, { useEffect, useState } from "react"
import ItemList from "./ItemList"
const items = [
    {id:1, categoria: 'Remera', imagen: '../imgs/roja.jpg',color:'Roja', stock:20},
    {id:2, categoria: 'Remera', imagen: '../imgs/azul.jpg',color:'Azul', stock:10},
    {id:3, categoria: 'Remera', imagen: '../imgs/amarilla.jpg', color:'Amarilla', stock: 15}
]
const getFetch = new Promise ((resolve) =>{
    setTimeout(()=>{
        resolve(items)
    }, 3000)
})
function ItemListContainer(){
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        getFetch
        .then(resp => setProductos(resp))
        .catch (err => console.log(err))
        .finally(()=>setLoading(false))
    },[])
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