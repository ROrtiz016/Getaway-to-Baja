import React, { Component } from 'react';
import './Panels.css'

class App extends Component {

  render() {
    return (
      <div className='panels'>
      <link href="https://fonts.googleapis.com/css?family=Amatic+SC&display=swap" rel="stylesheet"></link>

        <div className='panel panel-1'>
          <p>Hey</p>
          <p className='center'>Let's</p>
          <p>Play</p>
        </div>

        <div className='panel panel-2'>
          <p>Discover</p>
          <p className='center'>Explore</p>
          <p>Share</p>
        </div>

        <div className='panel panel-3'>
          <p>Experience</p>
          <p className='center'>It</p>
          <p>Today</p>
        </div>

        <div className='panel panel-4'>
          <p>Give</p>
          <p className='center'>All</p>
          <p>You Can</p>
        </div>

        <div className='panel panel-5'>
          <p>Life</p>
          <p className='center'>in</p>
          <p>Motion</p>
        </div>

      </div>
    );
  }
}

export default App;
