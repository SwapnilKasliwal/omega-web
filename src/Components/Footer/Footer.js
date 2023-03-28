import React from 'react';
import './Footer.css'
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

export default function Footer(){
  return (
  <footer>
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h3>About Us</h3>
        <ul>
          <li><a href="#">Our Team</a></li>
          <li><a href="#">Our Mission</a></li>
          <li><a href="#">Our Values</a></li>
        </ul>
      </div>
      <div className="col-md-4">
        <h3>Contact Us</h3>
        <ul>
          <li><a href="#">Email Us</a></li>
          <li><a href="#">Call Us</a></li>
          <li><a href="#">Visit Us</a></li>
        </ul>
      </div>
      <div className="col-md-4">
        <h3>Connect With Us</h3>
        <ul className="social-icons">
          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
          <li><a href="#"><i className="fa fa-instagram"></i></a></li>
          <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
  );
};
