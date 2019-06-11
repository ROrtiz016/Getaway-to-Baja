import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import Logo from '../../img/logo-GETAWAY.png'
import './NavBar.css'

class NavBar extends Component{
  constructor() {
    super()
    this.state = {
      showNav: false,
    }
  }

  toggleNav() {
    this.setState({
      showNav: !this.state.showNav
    })
  }

  render(){
    return (
      <div className='Nav'>
        <div className='backLogo'>
          <img src={Logo} alt="Logo" className='Logo'/>
        </div>

        <div className='show-nav'>
          <div className="mobile-nav-content">
          <div>
            <h3 className='navBtn'>Explore</h3>
              <p className='subTab'>WHERE TO GO</p>
          </div>

          <div>
            <h3 className='navBtn'>Destination</h3>
            <p className='subTab'>START YOUR <br/>ADVENTURE</p>
          </div>

          <div>
            <h3 className='navBtn'>Tours</h3>
            <p className='subTab'>SHARE YOUR <br/>STORIES</p>
          </div>

          <div>
            <h3 className='navBtn'>Contact</h3>
            <p className='subTab'>LET US HELP YOU</p>
          </div>

          </div>
        </div>

        <div className='media'>
          <p className='Find'>Find us on: </p>
          <a href="https://www.instagram.com/getawaytobaja/"><img src="https://nashvillefilmfestival.org/wp-content/uploads/2018/03/Instagram-Button.png" alt="instagram" className='Smedia'/></a>

          <img src="https://images.sftcdn.net/images/t_optimized,f_auto/p/8a6eafba-96d2-11e6-b334-00163ec9f5fa/77332936/facebook-logo.png" alt="facebook" className='Smedia'/>

          <a href="https://www.youtube.com/channel/UCC4v6ElEgqIbfpoRFBP6jIw"><img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/YouTube.max-1100x1100.png" alt="Youtube" className='Smedia'/></a>

          <img src="https://www.stickpng.com/assets/images/5a05b7349cf05203c4b60463.png" alt="" className='Smedia'/>
        </div>

        <div></div>

      </div>
    )
  }
}

export default NavBar 