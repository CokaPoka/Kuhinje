import React from 'react'
import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

const Toolbar = (props) => {
    return (
        <>
            <div className="toolbar">
                <nav className="toolbar-navigation">
                    <div className="toolbar-toggle-button">
                        <DrawerToggleButton click={props.drawerToggleClickHandler} />
                    </div>
                    <div className="toolbar-navigation-items">
                        <ul>
                            <li>
                                <a href='/' className="control-li">
                                    <div className="home-img"></div>
                                    <p>home</p>
                                </a>
                            </li>
                            <li>
                                <a href='/gallery' className="control-li">
                                    <div className="gallery-img"></div>
                                    <p>gallery</p>
                                </a>
                            </li>
                            <li>
                                <a href='/designing' className="control-li">
                                    <div className="design-img"></div>
                                    <p>designing</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Toolbar