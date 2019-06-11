import React, { Component } from 'react'
// import LaPaz from '../../img/Malecon2.jpg'
// import Ceviche from '../../img/Ceviche.jpeg'
// import Balandra from '../../img/balandraBeach.jpg'
// import Adventure from '../../img/adventure.jpg'
// import Zipline from '../../img/zipline-pn.jpg'
import {Link} from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Panels from '../FlexPanels/Panels'
import Tours from '../Tours/Tours'
import Footer from '../Footer/Footer'
import './Home.css'

class Home extends Component {

  render() {
    return (
      <div>

        <link href="https://fonts.googleapis.com/css?family=Poiret+One" rel="stylesheet"></link>
        <NavBar />

        <div className='presentation'>
          <p className='title-text'>Experience Paradise</p>
          <Link to='Baja' className='Link'><p className='tours-btn' >View Destination</p></Link>
        </div>

        <div className='barra'>
          <h2 className='Welcome'>Welcome to your next Adventure!</h2>
        </div>

        <Tours/>
        <Panels />
      
        <Footer />
      </div>
    )
  }
}

export default Home