import React from 'react'
import './style.css'

const Address_Card = () => {
  return (
    <div className='Address_card'>
      <h1>Address</h1>
      <div className="main_ads">
        <div className="name">pranav</div>
        <div className="phone_no">9699687404</div>
      </div>

      <div className="main_ctp">
        <div className="city">Basmath</div>
        <div className="pincode">431512</div>
      </div>


      <div className="address">
        bank colony, house no. 102,
      </div>

      <div className="ops_st">
        <div className="state">Maharashtra</div>
        <div className="ops_phoneno">1234567890</div>
      </div>
    </div>
  )
}

export default Address_Card