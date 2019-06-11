import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import BajaVideo from '../../Video/LaPaz.mp4'
import './Baja.css'

class Baja extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className='discover-baja'>
          <h1>Discover Baja, Discover Paradise</h1>
        </div>

        <video src={BajaVideo} autoPlay className='video'></video>

        <div className='location'>
            <h1 className='la-paz-title'>BAJA</h1>
            <p className='baja-text'>It is a state to the northwest of Mexico, which lower the southern part of the peninsula of Baja California. Known by Mexicans as Baja California Sur, it is a tourist destination where the desert meets the sea, on its eastern side with the Gulf of California (also called the Sea of ​​Cortez) and west and south with the Pacific Ocean. Its capital city, La Paz, is located in a sheltered bay on the east coast of the peninsula. It is an unforgettable visual attraction, with sunsets full of colors and peace, where the local people are friendly and calm. Delight with its gastronomy, its fresh seafood dishes, its typical food of the region will cause an explosion of flavors and colors in all its dishes. </p>
            <br/>
            <p className='baja-text'> Its marine and land fauna is simply captivating, you will have the experience not only to look at them but also to interact with them, as for example, swimming with the whale shark that year after year arrives at the bay of La Paz. You can swim with sea lions and among the reefs see great varieties of fish, hike and be able to watch the birds and animals, admire or swim in crystalline beaches, put your feet in the warm white sand. </p>
            <br/>
            <p className='baja-text'>A complete cultural and unforgettable experience in every sense, an experience, it is an experience that fills the soul with peace, you have to live it.</p>
        </div>

        <div>
          
        </div>

        <Footer />
      </div>
    )
  }
}

export default Baja