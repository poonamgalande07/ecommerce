import React from 'react'
import Banner from '../../Components/Carousel/Banner'
import Product from '../../Components/Products/Product'
import { mens_kurta } from '../../Components/Data/Mens_Kurta'
import Home_Products from '../../Components/Products/Home_Products'
import Product_Carousel from '../../Components/Carousel/Product_Carousel'
import { womens } from '../../Components/Data/women_dress'
import Address_Card from '../../Components/Address_Card/Address_Card'


const Home = () => {
  return (
    <div>
      <Banner />
      
      <Home_Products  products={mens_kurta}/>
      <Product_Carousel heading={"Men's Kurtas"} products={mens_kurta} />
      <Product_Carousel heading={"Women's Kurtas"} products={womens} />
      
      <Address_Card />
    </div>
  )
}

export default Home