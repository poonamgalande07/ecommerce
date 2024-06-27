import React from 'react'
import {Link} from 'react-router-dom'
import { FaStar } from "react-icons/fa";

const Card = ({products}) => {
  console.log(products)
  return (
    
    <Link to={`/product/${products.id}`} className='card'>
      <div className="img">
        <img src={products.imageUrl} alt="" />
      </div>
      <div className="product_Details">
      <div className="brand">{products.brand}</div>
      <div className="title">{products.title}</div>
      <div className="rating">{products.rating}<FaStar size={9}/></div>
     <div className="main_price">
     <div className="discount_price">₹{products.discountedPrice}</div>
      <div className="price">₹{products.price}</div>
      <div className="dicounted_percent">{products.discountPersent}% off</div>
      </div>
      <div className="quantity">Stock:{products.quantity}</div>
     
      </div>
      </Link>
      

  )
}

export default Card