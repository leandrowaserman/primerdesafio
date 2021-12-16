const items = [
    {id:1, categoria: 'Remera', imagen: 'https://res.cloudinary.com/drzsi9idn/image/upload/v1639440873/roja_stpesa.jpg',color:'Roja', stock:20, descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quas, iste fugit nulla, vel laudantium assumenda incidunt repellat libero praesentium eos nihil aliquam blanditiis aperiam necessitatibus, aut at sint similique.', precio:1100},
    {id:2, categoria: 'Remera', imagen: 'https://res.cloudinary.com/drzsi9idn/image/upload/v1639440873/azul_zwaqoa.jpg',color:'Azul', stock:10, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quas, iste fugit nulla, vel laudantium assumenda incidunt repellat libero praesentium eos nihil aliquam blanditiis aperiam necessitatibus, aut at sint similique.', precio:1300},
    {id:3, categoria: 'Remera', imagen: 'https://res.cloudinary.com/drzsi9idn/image/upload/v1639440873/amarilla_uz2jqx.jpg', color:'Amarilla', stock: 15, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quas, iste fugit nulla, vel laudantium assumenda incidunt repellat libero praesentium eos nihil aliquam blanditiis aperiam necessitatibus, aut at sint similique.', precio:1200},
    {id:4, categoria:'Gorra', imagen: 'https://res.cloudinary.com/drzsi9idn/image/upload/v1639601599/tommy-hilfiger-2813-046993-1-product_tjvae6.jpg', color:'Negra', stock:3, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quas, iste fugit nulla, vel laudantium assumenda incidunt repellat libero praesentium eos nihil aliquam blanditiis aperiam necessitatibus, aut at sint similique.', precio:500},
    {id:5, categoria:'Gorra', imagen: 'https://res.cloudinary.com/drzsi9idn/image/upload/v1639634829/90eaa9ea68d2f6c5d7f11a3f10f32205_e1lj09.jpg', color:'Gris', stock:5, descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quas, iste fugit nulla, vel laudantium assumenda incidunt repellat libero praesentium eos nihil aliquam blanditiis aperiam necessitatibus, aut at sint similique.', precio:700 }
]
const getItems = new Promise ((resolve) =>{
    setTimeout(()=>{
        resolve(items)
    },2000)
})


export default getItems