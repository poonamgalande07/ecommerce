import React from 'react'
import Navigation from '../Components/Navigation/Navigation'
import { Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Cart from '../Components/Cart/Cart'
import Product from '../Components/Products/Product'
import Checkout from '../Components/Checkout/Checkout'
import Order from '../Components/Orders/Order'
import Order_Details from '../Components/Orders/Order_Details'
import Product_Details from '../Components/Product_Details/Product_Details'
import Footer from '../Components/Footer/Footer'
const Customer_Routes = () => {
  return (
    <div>
        
        <Navigation />                     
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/account/order' element={<Order/>} />
            <Route path='/account/oredr/:orderId' element={<Order_Details />} />
            <Route path='/product/:productId' element={<Product_Details />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default Customer_Routes