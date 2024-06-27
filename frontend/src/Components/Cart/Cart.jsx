import React from 'react'
import Cart_Card from './Cart_Card'



const Cart = () => {

  return (
    <div className="cart_section">
      <div className="cart_ietms">
      <div class="up">
          <div class="add">From saved Address</div>
          <div class="del">
            <button>Enter Delivery Pincode</button>
          </div>
        </div>

        {[1,1,1,1].map((item,index)=><Cart_Card/>)}
        
        <div class="place_btn">
          <button>place order</button>
        </div>
        </div>
      <div className="price_datails">
        <div class="prc_det">PRICE DETAILS</div>

        <div class="right_info">
          <div class="prc_itm">
            <div class="prc_i">Price (4 items)</div>
            <div class="prc">₹10,396</div>
          </div>

          <div class="prc_dis">
            <div class="pr_d">Discount</div>
            <div class="d">− ₹8,454</div>
          </div>

          <div class="del_chr">
            <div class="d_c">Delivery Charges</div>
            <div class="chr">Free</div>
          </div>

          <div class="del_line"></div>

          <div class="tlt_amt">
            <div class="tlt">Total Amount</div>
            <div class="amt">₹1,942</div>
          </div>

          <div class="tlt_line"></div>

          <div class="you_save">You will save ₹8,454 on this order</div>
        </div>
      </div>
    </div>
   
  )
}

export default Cart