import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/Navbar'
import ItemListContainer from './components/container/ItemListContainer'
import ItemCount from './components/ItemCount'

const App = () =>{
  return(
    <main>
      <header>
        <NavBar />
      </header>
      <ItemListContainer/>
    </main>

  )
}
export default App
