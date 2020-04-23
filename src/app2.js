import React, { useEffect, useRef, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Gallery from './components/Gallery/Gallery'
import Home from './components/Home/Home'
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Logo from './img/logo.png'


function App2() {
    const [sideDrawerOpen, setSideDrawerOpen] = useState (false)
    // const [show, doShow] = useState({
    //     itemOne: false,
    //     itemTwo: false,
    //     itemThree: false
    // });
    // const ourRef = useRef(null),
    //     anotherRef = useRef(null),
    //     refThree = useRef(null);

    // useEffect(() => {
    //     const topPos = element => element.getBoundingClientRect().top;
    //     //added to reduce redundancy
    //     const div1Pos = topPos(ourRef.current),
    //         div2Pos = topPos(anotherRef.current),
    //         div3Pos = topPos(refThree.current);

    //     const onScroll = () => {
    //         const scrollPos = window.scrollY + window.innerHeight;
    //         if (div1Pos < scrollPos) {
    //             doShow(state => ({ ...state, itemOne: true }));
    //         } else if (div2Pos < scrollPos) {
    //             doShow(state => ({ ...state, itemTwo: true }));
    //         } else if (div3Pos < scrollPos) {
    //             doShow(state => ({ ...state, itemThree: true }));
    //         }
    //     };

    //     window.addEventListener("scroll", onScroll);
    //     return () => window.removeEventListener("scroll", onScroll);
    // }, []);

    const drawerToggleClickHandler = () => {
          setSideDrawerOpen(!sideDrawerOpen)
        }

    const backdropClickHandler = () => {
        setSideDrawerOpen(false)
    }

    let backdrop;

    if (sideDrawerOpen === true) {
        backdrop = <Backdrop click={backdropClickHandler} />
    }


    return (
        <>
            <Router>
                <div style={{ height: "100%" }}>
                    <header className="header">
                        <div className="logo">
                            <img className="img-logo" src={Logo} alt="logo-img" ></img>
                        </div>
                    </header>
                    <Toolbar drawerToggleClickHandler={drawerToggleClickHandler} />
                    <SideDrawer show={sideDrawerOpen} />
                    {backdrop}
                </div>
                <Switch>
                    <Route path='/gallery'><Gallery  /></Route>
                    <Route path='/'><Home /></Route>
                </Switch>
            </Router>
        </>
    )

}

export default App2;
