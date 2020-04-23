import React from 'react'
import './Home.css'
import { Slideshow } from './Slidebar/Slider'
import Logo from '../../img/logo.png'
import AOS from 'aos'
import '../../../node_modules/aos/dist/aos.css'
import kuhinja3d from '../../img/kuhinja3d.jpg'
import video from '../../img/kuhinja-video.mp4'
import triangle from '../../img/triangle.png'



const Home = () => {

    AOS.init()

    return (
        <>
            <div className='home'>
                <div className="wrapper-home">
                    <header className="header">
                        <div className="logo-header">
                            <img className="img-logo-header" src={Logo} alt="logo-img" ></img>
                        </div>
                    </header>
                    <Slideshow /> 
                    <div className="title" data-aos="fade-in" data-aos-duration="3000" data-aos-delay="400">
                        <h1>NAPRAVITE SVOJ DIZAJN KUHINJE IZ SNOVA!</h1>
                    </div>
                    <div className="container-middle" >
                        <div className="div-left" data-aos="fade-right" data-aos-duration="1800">
                          <img src={kuhinja3d} alt="kuhinja3d" className="kuhinja3d"></img>
                        </div>
                        <div className="text-right" data-aos="fade-in" data-aos-duration="3000" data-aos-delay="300">
                            <h3>Za Vas projektujemo kuhinje u 3D formatu</h3>
                            <h4>
                                Vodimo vas korak po korak - kroz čitav proces planiranja kuhinje.
                                Zajedno ćemo organizovati vaš prostor da bude lep i praktičan više nego što ste i očekivali. 
                            </h4>
                        </div>
                    </div>
                    <div className="container-middle-2" >
                        <div data-aos="fade-in" data-aos-duration="3000" data-aos-delay="300">
                            <h3>Za Vas projektujemo kuhinje u 3D formatu</h3>
                            <h4>
                                Vodimo vas korak po korak - kroz čitav proces planiranja kuhinje.
                                Zajedno ćemo organizovati vaš prostor da bude lep i praktičan više nego što ste i očekivali.
                            </h4>
                        </div>
                        <div className="div-left" data-aos="fade-left" data-aos-duration="1800">
                            <img src={kuhinja3d} alt="kuhinja3d" className="kuhinja3d"></img>
                        </div>
                    </div>
                    <div className="container-middle" >
                        <div className="div-left" data-aos="fade-right" data-aos-duration="1800" data-aos-delay="300">
                            <video className="video-animation" autoPlay loop>
                                <source src={video} type="video/mp4"></source>
                            </video>
                        </div>
                        <div className="text-right" data-aos="fade-in" data-aos-duration="3000" data-aos-delay="300">
                            <h3>Za Vas projektujemo kuhinje u 3D formatu</h3>
                            <h4>
                                Vodimo vas korak po korak - kroz čitav proces planiranja kuhinje.
                                Zajedno ćemo organizovati vaš prostor da bude lep i praktičan više nego što ste i očekivali.
                            </h4>
                        </div>
                    </div>
                    <div className="container-measures">
                        <img className="trinagle-img" src={triangle} alt="triangle-icon"></img>
                        <h3>Prva pomoć pri merenju</h3>
                        <button className="btn-instruction" data-aos="zoom-in" data-aos-duration="3000">UPUTSTVO</button>
                    </div>
                    <div id="static-img">
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home