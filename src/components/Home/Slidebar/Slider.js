import React from 'react';
import { Slide } from 'react-slideshow-image';
import Kitchen1 from '../../../img/kuhinja1.jpg'
import Kitchen2 from '../../../img/kuhinja2.jpg'
import Kitchen3 from '../../../img/kuhinja3.jpg'
import './Slider.css'

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: false,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}

export const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide {...properties}>
                <div className="each-slide">
                    <div className="img-slide">
                        <img class="img1" src={Kitchen1} alt="img1"></img>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="img-slide">
                        <img class="img1" src={Kitchen2} alt="img2"></img>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="img-slide">
                        <img class="img1" src={Kitchen3} alt="img3"></img>
                    </div>
                </div>
            </Slide>
        </div>
    )
}