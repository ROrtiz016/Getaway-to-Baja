import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home'
import Baja from './components/Baja/Baja'
import './reset.css';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <div>
            <link href="https://fonts.googleapis.com/css?family=Krub|Quicksand|Shadows+Into+Light|Ubuntu" rel="stylesheet"></link>
            
            <Route path='/' exact component={Home} />
            <Route path='/Baja' component={Baja}/>

          </div>

        </Switch>
      </HashRouter>
    );
  }
}

//reorganizar app para hacer funcionar las rutas de los componentes

export default App;
