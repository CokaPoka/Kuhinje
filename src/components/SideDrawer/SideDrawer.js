import React from 'react'
import './SideDrawer.css'

const SideDrawer = (props) => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">home</a></li>
                <li><a href="/gallery">gallery</a></li>
                <li><a href="/designing">designing</a></li>
                <li><a href="/newsletter">newsletter</a></li>
            </ul>
        </nav>
    )
}

export default SideDrawer