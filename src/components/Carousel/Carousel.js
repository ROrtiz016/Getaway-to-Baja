import React, { Component } from 'react'
import './Carousel.css'
import ballena from '../../img/Ballena-2.jpeg'
import Santiago from '../../img/Santiago2.jpeg'
import Ceviche from '../../img/Ceviche.jpeg'
import Balandra from '../../img/Balandra1.jpeg'
import Triunfo2 from '../../img/El-Triunfo2.jpeg'
import TBallena from '../../img/TiburonBallena1.jpeg'
import Tortuga from '../../img/Tortuga1.jpeg'

class Carousel extends Component {


componentDidMount(){
  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1} 
      slides[slideIndex-1].style.display = "block"; 
      setTimeout(showSlides, 2500); // Change image every 2 seconds
  }
}

  render() {
    return (
      <div>
        <div className='slideshow-container'>

          <div className='mySlides fade'>
            <div className='numberText'></div>
            <img src={ballena} alt="" className='slideImage' />
            {/* <div className='text'></div> */}
          </div>

          <div className='mySlides fade'>
            <div className='numberText'></div>
            <img src={Santiago} alt="" className='slideImage' />
            {/* <div className='text'></div> */}
          </div>

          <div className='mySlides fade'>
            <div className='numberText'></div>
            <img src={Ceviche} alt="" className='slideImage' />
            {/* <div className='text'></div> */}
          </div>

          <div className='mySlides fade'>
            <div className='numberText'></div>
            <img src={Triunfo2} alt="" className='slideImage' />
            {/* <div className='text'></div> */}
          </div>

          <div className='mySlides fade'>
            <div className='numberText'></div>
            <img src={TBallena} alt="" className='slideImage' />
            {/* <div className='text'></div> */}
          </div>

          <div className='mySlides fade'>
            <div className='numberText'></div>
            <img src={Balandra} alt="" className='slideImage' />
            {/* <div className='text'></div> */}
          </div>

          <div className='mySlides fade'>
            <div className='numberText'></div>
            <img src={Tortuga} alt="" className='slideImage' />
            {/* <div className='text'></div> */}
          </div>

        </div>

      </div>
    )
  }
}

export default Carousel;