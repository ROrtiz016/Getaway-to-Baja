import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Carousel from './components/Carousel/Carousel'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import './reset.css';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <link href="https://fonts.googleapis.com/css?family=Krub|Quicksand|Shadows+Into+Light|Ubuntu" rel="stylesheet"></link>

          <NavBar />
          <Carousel />
          <Home />
          <Footer />
        <Switch>
          {/* <Route exact path='/' component={Home} /> */}
        
        </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
