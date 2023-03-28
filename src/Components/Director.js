import React from 'react'

export default function DirectorMessage() {
  return (
    // <div className='container messageContainer'>
    //     <h2>Director's Message</h2>
    //     <div className='container directorImage'>
    //     <img src={require('../img/Omega_Cover.jpeg')} className='directorPhoto' />
    //     </div>
    //     <div className='container directorMessage'>
    //     <h4>We, Omega Stones Pvt. Ltd. are a leading manufacturer and supplier of granite stones around the world. We stock a wide variety of natural granite stones and marbles. The wide range of stone products includes granites, marble, and many more. We are always on the leading edge of design and strive to satisfy the most discriminating tastes. We are dedicated to offering unparalleled quality and service to designers and architects</h4>
    //     </div>
    // </div>
    <>

    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading fw-normal lh-1"><span className="text-body-secondary">Director's Message</span></h2>
        <p className="aboutData">We, Omega Stones Pvt. Ltd. are a leading manufacturer and supplier of granite stones around the world. We stock a wide variety of natural granite stones and marbles. The wide range of stone products includes granites, marble, and many more. We are always on the leading edge of design and strive to satisfy the most discriminating tastes. We are dedicated to offering unparalleled quality and service to designers and architects.</p>
      </div>
      <div className="col-md-5 order-md-1">
        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto directorImage" src={require('../img/Omega_Cover.jpeg')} width="400" height="400"/>
      </div>
    </div>

    <hr className="featurette-divider"/>
  </>
  )
}
