import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Panels from '../FlexPanels/Panels'
import Tours from '../Tours/Tours'
import Footer from '../Footer/Footer'
import './Home.css'
import whale from '../../img/WShark.jpg'

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

        <div className='back'>

          <div className='barra'>
            <h2 className='Welcome'>Welcome to your next Adventure!</h2>
          </div>

          <Tours />

        </div>

        <div className='window'>
          <img src={whale} alt="" className='whale'/>
        </div>

        <div className='back'>
          <Panels />
        </div>

        <Footer />
      </div>
    )
  }
}

export default Home