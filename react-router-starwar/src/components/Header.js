import React ,{Component} from 'react'
//Import Nav Link
import { NavLink } from 'react-router-dom'
export default class Header extends Component{
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="">Brand</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="active">
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/characters">Characters</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
  }
}
