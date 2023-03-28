import React from 'react'
import Product from './Product'
import Footer from './Footer/Footer'
export default function ProductsPage(props) {
    const products = props.products
  return (
    <div className='container containerCol'>
        <h1>Our Products</h1>
        <div className='cardRow'>
           {products.map((index, item)=>{<Product name={item.name} path={item.path}></Product>})} 
        <Product/>
        
        </div>
        <Footer/>
    </div>
  )
}
