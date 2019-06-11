import React,{Component} from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import BajaVideo from '../../Video/LaPaz.mp4'
import './Baja.css'

class Baja extends Component{

  render(){
    return (
      <div>
        <NavBar/>
        <video src={BajaVideo} autoPlay className='video'></video>
        <Footer/>
      </div>
    )
  }
}

export default Baja