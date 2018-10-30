import React, {Component} from 'react'
import Logo from '../../img/Logo.jpeg'
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
        <div>
          <img src={Logo} alt="Logo" className='Logo'/>
        </div>

        <div className='QueryBtn' onClick={() => this.toggleNav()}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={this.state.showNav ? 'show-nav mobile-nav' : 'mobile-nav'}>
          <div className="mobile-nav-content">
            <h3 className='navBtn'>Home</h3>
            <h3 className='navBtn'>About</h3>
            <h3 className='navBtn'>Service</h3>
            <h3 className='navBtn'>Contact</h3>
          </div>
        </div>

      </div>
    )
  }
}

export default NavBar 