import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'

const App = () =>{
  return(
    <main>
      <header>
        <NavBar />
        <ItemListContainer mensaje='Este es un mensaje para probar si funciona' />
      </header>
      <ItemCount stock={10} inicial={0}/>
    </main>

  )
}
export default App
