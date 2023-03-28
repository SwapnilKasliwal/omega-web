import React from 'react'
import CardRow from './CardRow'
import Carousel from './Carousel'
import DirectorMessage from './Director'
import Footer from './Footer/Footer'
export default function HomePage(props) {
    const products = props.products
 return (
    <div className='main'>
    <Carousel/>
    <div className="container marketing">
    <CardRow products={products}/>
    <hr className="featurette-divider"/>

    <DirectorMessage/>
    </div>
   
    <Footer/>
    </div>
  )
}
