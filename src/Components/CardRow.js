import React from 'react'
import Product from './Product'
import { NavLink } from 'react-router-dom'
import '../index.css'
export default function (props) {
    const products = props.products
  return (
    
    <div className='container containerCol'>
         <h1>Our Products</h1>
        <div className='cardRow'>
        <Product name="Baltic Brown Granite" path={"Balticbrown.jpg"}></Product>
        <Product name="River Black Granite" path={"crystal-yellow.jpg"}></Product>
        <Product name="Crystal Yellow Granite" path={"Riverblack.jpg"}></Product>
        </div>
        <NavLink to='/products' className='pageLink'>Show More</NavLink>
        <hr className='horizontalLine'/>
    </div>
  )
}
