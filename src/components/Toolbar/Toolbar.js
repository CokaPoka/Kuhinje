import React from 'react'
import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import Logo from '../../img/logo.png'

const Toolbar = (props) => {
    return (
        <>
            <div className="toolbar">
                <nav className="toolbar-navigation">
                    <div className="toolbar-toggle-button">
                        <DrawerToggleButton click={props.drawerToggleClickHandler} />
                    </div>
                    <div className="logo">
                        <img className="img-logo" src={Logo} alt="logo-img" ></img>
                    </div>
                    <div className="spacer" />
                    <div className="toolbar-navigation-items">
                        <ul>
                            <li>
                                <a href='/' className="control-li">
                                    <div className="home-img"></div>
                                    <p>početna</p>
                                </a>
                            </li>
                            <li>
                                <a href='/gallery' className="control-li">
                                    <div className="gallery-img"></div>
                                    <p>galerija</p>
                                </a>
                            </li>
                            <li>
                                <a href='/designing' className="control-li">
                                    <div className="design-img"></div>
                                    <p>projektovanje</p>
                                </a>
                            </li>
                            <li>
                                <a href='/newsletter' className="control-li">
                                    <div className="newsletter-icon"></div>
                                    <p>newsletter</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* <hr /> */}
            </div>
        </>
    )
}

export default Toolbar