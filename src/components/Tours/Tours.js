import React, { Component } from 'react'
import Balandra from '../../img/balandraBeach.jpg'
import LaPaz from '../../img/LaPaz1.jpeg'
import whaleShark from '../../img/Ballenas-5.jpeg'
import './Tours.css'

class Tours extends Component {

  render() {
    return (
      <div className='tours-container'>

        <h3 className='text1'>Tours</h3>

        <div className='flex-container'>
          <div className='tour'>
            <img src={Balandra} alt=""  className='img-tour'/>
            <h1 className='tour-name'>Nombre Tour</h1>
            <span>Rating</span>
            <h2>$1000</h2>
          </div>

          <div className='tour'>
            <img src={LaPaz} alt="" className='img-tour'/>
            <h1 className='tour-name'>Nombre Tour</h1>
            <span>Rating</span>
            <h2>$1000</h2>
          </div>

          <div className='tour'>
            <img src={whaleShark} alt="" className='img-tour' />
            <h1 className='tour-name'>Nombre Tour</h1>
            <span>Rating</span>
            <h2>$1000</h2>
          </div>

        </div>

      </div>
    )
  }
}

export default Tours