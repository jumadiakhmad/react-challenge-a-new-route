import React, { Component } from 'react';
import Home from './components/Home'
import Header from './components/Header'
import Starship from './components/Starship'
import {BrowserRouter, Link, Switch} from 'react-router-dom';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter
          <Route exact path='/' component={Home}/>
          <Route path= '/starships' component={Starship}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
