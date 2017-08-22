import React , {Component} from 'react'
import {Link} from 'react-router-dom'

export default class ListStarships extends Component{
  console.log('ini data props', this.props.vehicles);
  let data = this.props.vehicles;
  let listStarships = data.map( (starships) => {
    let films = starships.films.map((films) => {
      let endpoint = films.substr(films.indexOf("/api/") + 5)
      return <li key={films}>
        <Link to="/films"{endpoint}></Link>
      </li>
    })
    return (
      <div key={starships.name} className="col-lg-10 col-lg-offset-1 card">
        <div className="col-lg-6">
          <div className="profile">
            <h3 className="headings">
              <i className="fa fa space-shuttle" aria-hidden=true></i>
              {starships.name}
            </h3>
            </hr>
            <h4 className="sub-headings">Profile</h4>
            <dl className="dl-horizontal">
            <dt>MGLT</dt>
              <dd>{starships.MGLT}</dd>
              <dt>Manufacturer</dt>
              <dd>{starships.manufacturer}</dd>
              <dt>Model</dt>
              <dd>{starships.model}</dd>
              <dt>Class</dt>
              <dd>{starships.starship_class}</dd>
              <dt>Cargo</dt>
              <dd>{starships.cargo_capacity}</dd>
              <dt>Length</dt>
              <dd>{starships.length}</dd>
            </dl>
            </dl>
          </div>
        </div>
        <div className="col-lg-6">
          <h4 className="sub-headings">Film Endpoints</h4>
          </hr/>
          <ul>
            {films}
          </ul>
        </div>
      </div>
    )
  })
  return (
    <div className="row">
    <div className="col-lg-10 col-lg-offset-1">
        <h1 className="headings">Starships</h1>
        <hr/>
      </div>
      {listStarships}
    </div>
  )
}
