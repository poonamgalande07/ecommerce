import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import './style.css'
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillLightningFill } from "react-icons/bs";


const Product_Details = () => {
  const navigate = useNavigate()
  const handleCart = () => {
    navigate("/cart")
  }

  const handlecheckout = () => {
    navigate("/checkout")
  }
  
  return (
    <div className='product_details'>
      <div className="bread_crumb">
        <Link>Home</Link>
        <p><IoIosArrowForward/></p>
        <Link>Product</Link>
        <p><IoIosArrowForward/></p>
        <Link>Category</Link>
        <p><IoIosArrowForward/></p>
        <Link>Monitor</Link>
        <p><IoIosArrowForward/></p>
        <Link>Acer Monitor</Link>
      </div>

      <div className="product_section">
        <div className="images">
          <div className="main_image">
            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/n/2/8/hot-selling-reversable-cute-plush-big-ears-bunny-premium-quality-original-imagtg6sdzd5wtwf.jpeg?q=70" alt="" />
          </div>
          <div className="sub_images">
            <div className="img">
              <img src="https://rukminim2.flixcart.com/image/128/128/xif0q/stuffed-toy/1/p/d/hot-selling-reversable-cute-plush-big-ears-bunny-premium-quality-original-imagvdwgnxpcpgpg.jpeg?q=70&crop=false" alt="" />
            </div>
            <div className="img">
              <img src="https://rukminim2.flixcart.com/image/128/128/xif0q/stuffed-toy/d/o/b/hot-selling-reversable-cute-plush-big-ears-bunny-premium-quality-original-imagvdwgsrzheqhs.jpeg?q=70&crop=false" alt="" />
            </div>
            <div className="img">
              <img src="https://rukminim2.flixcart.com/image/128/128/xif0q/stuffed-toy/h/j/r/hot-selling-reversable-cute-plush-big-ears-bunny-premium-quality-original-imagvdwg5asbykrh.jpeg?q=70&crop=false" alt="" />
            </div>
            <div className="img">
              <img src="https://rukminim2.flixcart.com/image/128/128/xif0q/stuffed-toy/c/x/y/hot-selling-reversable-cute-plush-big-ears-bunny-premium-quality-original-imagvdwgtqgrpa7m.jpeg?q=70&crop=false" alt="" />
            </div>
          </div>

          <div className="button">
            <div className="orange">
              <p><FaShoppingCart size={15}/></p>
              <button onClick={handleCart}>Add to cart</button></div>
            <div className="oranged">
              <p><BsFillLightningFill size={14}/></p>
              <button onClick={handlecheckout}>Buy Now</button></div>
            
          </div>
        </div>
        <div className="product_info">
          <div className="brands">Bunny</div>
            <div className="titles">V VANTRA Hot Selling Reversable Cute Plush Big Ears Bunny Premium Quality - 35 cm  (Multicolor)</div>
            <div className="rate_review">
              <div className="rating">4.5 <FaStar size={10}/></div>
              <div className="review">322 Ratings & 150 Reviews</div>
            </div>
            <div className="price_info">
              <div className="price">₹ 268</div>
              <div className="m_price">₹536</div>
              <div className="discount">50% off</div>
            </div>

            <div className="colors">
              <div className="color bg-yellow-600 "></div>
              <div className="color bg-black "></div>
              <div className="color bg-pink-600"></div>
              <div className="color bg-green-600 "></div>
            </div>

            <div className="sizes">
              <div className="size">M</div>
              <div className="size">S</div>
              <div className="size">X</div>
              <div className="size">XL</div>
            </div>
        </div>
      </div>
      </div>
  )
}

export default Product_Details