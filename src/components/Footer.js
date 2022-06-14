import React, { Component } from 'react'
import '../services/Footer.css'
export default class Footer extends Component {
  render() {
    return (
      <div>

  
  
  <div className="footer">
    <div className="inner-footer">
  
      <div className="footer-items">
        <h1>RENT-IT!</h1>
        <p>Renting Furniture Online becomes so easy now.</p>
      </div>

      <div className="footer-items">
        
        <h3>Quick Links</h3>
        <br/>
        <div className="border1"></div> 
          <ul>
            <a href="#" alt=""><li>Home</li></a>
            <a href="#"alt=""><li>Products</li></a>
            <a href="#" alt=""><li>Contact</li></a>
            <a href="#" alt=""><li>About</li></a>
          </ul>
      </div>
  
      <div className="footer-items">
        <h3>Categories</h3>
        <br/>
        <div className="border1"></div>  
          <ul>
            <a href="#" alt=""><li>Home</li></a>
            <a href="#" alt=""><li>Office</li></a>
            <a href="#" alt=""><li>Electronics</li></a>
            <a href="#" alt=""><li>Fitness</li></a>
          </ul>
      </div>
      <div className="footer-items">
        <h3>Contact us</h3>
        <br/>
        <div className="border1"></div>
          <ul>
            <li><i className="fa fa-map-marker" aria-hidden="true"></i>RENT_IT</li>
            <li><i className="fa fa-phone" aria-hidden="true"></i>123456789</li>
            <li><i className="fa fa-envelope" aria-hidden="true"></i>support@rentit.com</li>
          </ul> 
        
          <div className="social-media">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-google-plus-square"></i></a>
          </div> 
      </div>
    </div>
    
    <div className="footer-bottom">
      Copyright &copy; RENT-IT 2022.
    </div>
  </div>
    
  
    
  
      </div>
    )
  }
}
