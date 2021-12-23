import {BrowserRouter, Routes, Route} from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/Navbar'
import ItemListContainer from './components/container/ItemListContainer'
import ItemDetailContainer from './components/container/ItemDetailContainer'
import Cart from './components/container/Cart'
import CartContextProvider from './components/context/CartContext'

const App = () =>{
  return(
    <CartContextProvider>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route exact path="/categoria/:idCate" element={<ItemListContainer/>}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
        <Route exact path="/cart" element={<Cart />}></Route>
      </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}
export default App

