import React from 'react'

export default function Product(props) {
    const {name, path} = props
  return (
    <div className="card" style={{width: 300}}>
  <img src={require('../img/products/'+path)} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h4 className="card-title">{name}</h4> 

  </div>
</div>
  )
}
