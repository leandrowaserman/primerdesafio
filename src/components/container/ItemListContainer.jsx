import React, { useEffect, useState } from "react"
import ItemList from "./ItemList"
import getItems from "./services/data"
const items = [
    {id:1, categoria: 'Remera', imagen: 'https://res.cloudinary.com/drzsi9idn/image/upload/v1639440873/roja_stpesa.jpg',color:'Roja', stock:20, descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quas, iste fugit nulla, vel laudantium assumenda incidunt repellat libero praesentium eos nihil aliquam blanditiis aperiam necessitatibus, aut at sint similique.'},
    {id:2, categoria: 'Remera', imagen: 'https://res.cloudinary.com/drzsi9idn/image/upload/v1639440873/azul_zwaqoa.jpg',color:'Azul', stock:10, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quas, iste fugit nulla, vel laudantium assumenda incidunt repellat libero praesentium eos nihil aliquam blanditiis aperiam necessitatibus, aut at sint similique.'},
    {id:3, categoria: 'Remera', imagen: 'https://res.cloudinary.com/drzsi9idn/image/upload/v1639440873/amarilla_uz2jqx.jpg', color:'Amarilla', stock: 15, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quas, iste fugit nulla, vel laudantium assumenda incidunt repellat libero praesentium eos nihil aliquam blanditiis aperiam necessitatibus, aut at sint similique.'}
]
function ItemListContainer(){
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        getItems
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
