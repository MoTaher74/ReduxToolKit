import { Route, Routes } from "react-router"
import Counter from "./components/Counter"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Cart from "./components/Cart"

function App() {


  return (
   <>

   <Navbar/>
   <Routes >
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
   </Routes>
   <Counter/>
   </>
  )
}

export default App
