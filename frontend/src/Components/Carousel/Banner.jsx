import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './style.css'

const data=[
  {
    'id': 1,
    'img':"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/04b867a83134dd0f.jpg?q=20"
  },

  {
    'id': 2,
    'img':"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ec5339b6299d2196.jpeg?q=20"
  },

  {
    'id': 3,
    'img':"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/5c2786ca089200d3.jpeg?q=20"
  },

  {
    'id': 4,
    'img':"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/0b258b0085c395ee.jpg?q=20"
  },

  {
    'id': 5,
    'img':"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f888f8f443a8a927.jpg?q=20"
  },

  {
    'id':6,
    'img':"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ec5339b6299d2196.jpeg?q=20"
  },
]

const Banner = () => {
  return (
    <Carousel className='z' >

      {data.map((item,indx) =>
      <img src={item.img} alt=''/>
    )}
    </Carousel>
  )
}

export default Banner