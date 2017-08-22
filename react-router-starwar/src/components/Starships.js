import React, {Component} from 'react'

import Vehicles from './ListVehicles'

export default class Starships extends Component{
  constructor(props) {
    super(props)
    this.state = {
      starships: []
    }
  }

  componentDidMount() {
    //Fetch data from API
    fetch("https://swapi.co/api/starships/").then((response) => {
        return response.json()
    })
    .then( (data) => {
      this.setState({
        vehicles: data.results
      })
    })
  }
  render() {
    return (
      <div className="app-body offset col-lg-10 col-lg-offset-1">
        <ListStarships starships={this.state.starships}/>
      </div>
    )
  }
}
