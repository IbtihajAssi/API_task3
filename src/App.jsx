import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import Products from './components/products/Products.jsx'
import Home from './components/home/Home.jsx'
import Pizza from './components/pizza/Pizza.jsx'
import Onion from './components/onion/Onion.jsx'
import Cherry from './components/cherry/Cherry.jsx'
import Resturent from'./components/resturent/Resturent.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
export default function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar />
     <Routes>
     <Route path='/' element={<Home />} />
<Route path='/products' element={<Products />} />
<Route path='/resturent' element={<Resturent />} />
<Route path='/pizza' element={<Pizza />} />
<Route path='/onion' element={<Onion/>} />
<Route path='/cherry' element={<Cherry/>} />
     </Routes>

     </BrowserRouter>
  
    </>
  )
}
