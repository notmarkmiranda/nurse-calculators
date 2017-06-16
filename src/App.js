import React, { Component } from 'react'
import './App.scss'

import Home from './components/Home'
import NavBar from './components/NavBar'
import Dosage from './components/Dosage'
import RampingUp from './components/RampingUp'
import PageNotFound from './components/PageNotFound'

import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Match exactly pattern="/" component={ Home } />
            <Match exactly pattern="/dosage" component={ Dosage } />
            <Match exactly pattern="/ramping-up" component={ RampingUp } />
            <Miss component={ PageNotFound } />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
