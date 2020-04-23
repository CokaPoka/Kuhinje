import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Slider.css'
import img1 from '../../../img/kuhinja1.jpg'
import img2 from '../../../img/kuhinja2.jpg'
import video from '../../../img/kuhinja-video.mp4'

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: false,
    pauseOnHover: false,
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
                        <img className="img-1" src={img1} alt="img1"></img>
                        <div className="slide-text">
                            <h1>3D CRTEŽI</h1>
                        </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="img-slide">
                        <img class="img-2" src={img2} alt='img2'>
                        </img>
                        <div className="slide-text">
                            <h1>2D CRTEŽI SA MERAMA</h1>
                        </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="video-slide">
                        <video className="video" autoPlay loop>
                            <source src={video} type="video/mp4"></source>
                        </video>
                        <div className="slide-text">
                            <h1>ANIMACIJA</h1>
                        </div> 
                    </div>
                </div>
            </Slide>
        </div >
    )
}