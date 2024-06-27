import React from "react";
import "./style.css";

const Cart_Card = ({ product }) => {
  return (
    // <div>{product?.title}</div>

    <div class="cart_card">
      <div class="cartimg">
        <img
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/k/d/t/zip-bunny-22-ysh-original-imagtdhswwpweyaj.jpeg?q=70"
          alt=""
        />
        <div className="cart_btn">
          <button>+</button>
          <p>1</p>
          <button>-</button>
        </div>
      </div>
      <div class="cartimg_info">
        <div className="title">ghfgyjghjghjgh</div>
        <div className="brand">ghjghj</div>
        <div class="pricecart_detail">
          <div class="cartimg_price">₹268</div>
          <div class="cartorg_price">₹1,999</div>
          <div class="cart_dicountp">86% Off</div>
        </div>
        <div class="save_remove">
          <div class="save">SAVE FOR LATER</div>
          <div class="remove">REMOVE</div>
        </div>
      </div>

      <div className="status">27 - Jun 2024 Added</div>
    </div>
  );
};

export default Cart_Card;
