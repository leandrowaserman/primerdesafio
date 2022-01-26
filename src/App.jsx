import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar'
import ItemListContainer from './components/container/ItemListContainer'
import ItemDetailContainer from './components/container/ItemDetailContainer'
import Cart from './components/container/Cart'
import CartContextProvider from './context/CartContext'
import Checkout from './components/container/Checkout'



const App = () =>{
  return(
    <CartContextProvider>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route exact path="/categoria/:idCate" element={<ItemListContainer/>}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
        <Route exact path="/cart" element={<Cart />}/>
        <Route exact path="/checkout" element={<Checkout/>}/>
      </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}
export default App

