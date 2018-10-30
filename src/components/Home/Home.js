import React, { Component } from 'react'
import LaPaz from '../../Video/LaPaz.mp4'
import Caseta from '../../img/Caseta.jpeg'
import Ballenas from '../../img/Ballenas-5.jpeg'
import TBallena from '../../img/TiburonBallena-3.jpeg'
import './Home.css'

class Home extends Component {

  render() {
    return (
      <div>
        <div className='barra'>
          <h2 className='Welcome'>Welcome to your next Tour!</h2>
        </div>

        <div className='texto'>
          <h3 className='text1'>
            Baja California Sur is a paradise <br /> yet to be explored.
          </h3>

          <video src={LaPaz} className='vid' autoPlay></video>
        </div>

        <div className='tours'>
          <h2>TOURS</h2>
        </div>

        <div className='TourPacks'>
          <div className='packsBox'>
            <img src={Caseta} alt=""  className='tourImg'/>
            <p className='packs'>Damiana</p>
          </div>

          <div className='packsBox'>
            <img src={Ballenas} alt=""  className='tourImg'/>
            <p className='packs'>El Gigante</p>
          </div>

          <div className='packsBox'>
            <img src={TBallena} alt=""  className='tourImg'/>
            <p className='packs'></p>
          </div>

        </div>
      </div>
    )
  }
}

export default Home