import {BrowserRouter, Routes, Route} from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/Navbar'
import ItemListContainer from './components/container/ItemListContainer'
import ItemDetailContainer from './components/container/ItemDetailContainer'

const App = () =>{
  return(
    <main>
      <header>
        <NavBar />
      </header>
      <ItemListContainer/>
      <ItemDetailContainer />
      </main>
  )
}
export default App

