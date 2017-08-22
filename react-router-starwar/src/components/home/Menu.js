import React ,{Component} from 'react'
import './menu.css'
import './shared.css'
import { Link } from 'react-router-dom'

export default class Menu extends Component{
  render() {
    return (
      <div id="menu" className="width-limit">
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/vehicles'>Vehicles</Link></li>
            <li><Link to='/films'>Films</Link></li>
            <li><Link to='/peoples'>People</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}
