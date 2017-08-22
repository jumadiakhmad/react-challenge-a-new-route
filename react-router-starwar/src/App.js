import React ,{Component}  from 'react';
// import Home from './components/Home'
import Main from './components/home/Main'
 import Topo from './components/home/Topo'
import {BrowserRouter} from 'react-router-dom';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// import './App.css';

class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <div>
          <Topo />
          <Main/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
