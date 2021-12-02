import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

const App = () =>{
  return(
    <header>
      <NavBar />
      <ItemListContainer mensaje='Este es un mensaje para probar si funciona' />
    </header>
  )
}
export default App
