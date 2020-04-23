import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Gallery from './components/Gallery/Gallery'
import Home from './components/Home/Home'
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Newsletter from './Newsletter/Newsletter';

class App extends Component {

  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })

  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }





  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <>
        <Router>
          <div className="wrapper-app" style={{ height: "100%" }}>
            <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
          </div>
          <Switch>
            <Route path='/gallery'><Gallery /></Route>
            <Route path='/newsletter'><Newsletter /></Route>
            <Route path='/'><Home /></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;
