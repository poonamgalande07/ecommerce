import React from 'react'
import Card from './Card'
import './style.css'

const Home_Products = ({products}) => {
  console.log(products)
  return (
    <div className='product_grid'>
      
      {products.map((item,indx) => <Card products={item}/> 
  
    )}
  
    </div>
  )
}

export default Home_Products