
import '../components/Style.css';

import pic1 from '../assets/11.webp';

import pic2 from '../assets/22.jpeg';

import pic3 from '../assets/33.jpeg';

import pic4 from '../assets/44.jpeg';

import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <div className="carou">
            <Carousel>
                <div>
                <img src={pic1} />
                </div>
                <div>
                <img src={pic2} />
                </div>
                <div>
                <img src={pic3} />
                    
                </div>
                <div>
                <img src={pic4} />
                
                </div>
            </Carousel>
            </div>
        );
    }
};

    


export default DemoCarousel
