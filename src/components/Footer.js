import React, { Component } from 'react'
import '../services/Footer.css'
export default class Footer extends Component {
  render() {
    return (
      <div>

  
  
  <div class="footer">
    <div class="inner-footer">
  
      <div class="footer-items">
        <h1>RENT-IT!</h1>
        <p>Renting Furniture  Online becomes so easy now.</p>
      </div>

      <div class="footer-items">
        
        <h3>Quick Links</h3>
        <br/>
        <div class="border1"></div> 
          <ul>
            <a href="#" alt=""><li>Home</li></a>
            <a href="#"alt=""><li>Products</li></a>
            <a href="#" alt=""><li>Contact</li></a>
            <a href="#" alt=""><li>About</li></a>
          </ul>
      </div>
  
      <div class="footer-items">
        <h3>Categories</h3>
        <br/>
        <div class="border1"></div>  
          <ul>
            <a href="#" alt=""><li>Home</li></a>
            <a href="#" alt=""><li>Office</li></a>
            <a href="#" alt=""><li>Electronics</li></a>
            <a href="#" alt=""><li>Fitness</li></a>
          </ul>
      </div>
      <div class="footer-items">
        <h3>Contact us</h3>
        <br/>
        <div class="border1"></div>
          <ul>
            <li><i class="fa fa-map-marker" aria-hidden="true"></i>RENT_IT</li>
            <li><i class="fa fa-phone" aria-hidden="true"></i>123456789</li>
            <li><i class="fa fa-envelope" aria-hidden="true"></i>support@rentit.com</li>
          </ul> 
        
          <div class="social-media">
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-google-plus-square"></i></a>
          </div> 
      </div>
    </div>
    
    <div class="footer-bottom">
      Copyright &copy; RENT-IT 2022.
    </div>
  </div>
    
  
    
  
      </div>
    )
  }
}
