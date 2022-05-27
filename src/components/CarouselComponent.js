import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import pic1 from '../images/11.jpg'
import pic2 from '../images/22.jpg'
import pic3 from '../images/33.jpg'
import pic4 from '../images/44.jpg'
import '../services/Carousel.css'
export default class CarouselComponent extends Component {
    render(){

    return (
        <div className="carousel-wrapper" >
            <Carousel infiniteLoop useKeyboardArrows autoPlay >
            <div >
                    <img src={pic1} alt=""/>
                </div>
                <div>
                    <img src={pic2} alt=""/>
                </div>
                <div>
                    <img src={pic3}  alt=""/>
                </div>
                <div>
                    <img src={pic4} alt=""/>
                </div>
            </Carousel>
        </div>
    );
}
}