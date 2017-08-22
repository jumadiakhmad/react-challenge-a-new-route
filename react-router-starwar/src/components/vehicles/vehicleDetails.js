import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../home/Loading';
import api from '../../helpers/api.js';

class vehicleDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
        	isLoading: true,
        	vehicle: '',
          filmsItAppears: []
        }
    }

	componentWillMount(id) {
		api.getOneVehicle( this.props.match.params.vehicleId ).then( vehicle => {
			this.setState({
				isLoading: false,
				vehicle: this.props.vehicle
			})
		});
	}

    componentDidUpdate() {
        if ( this.state.vehicle && !this.state.filmsItAppears.length ) {
            api.getMultipleFilms( this.state.vehicle.films ).then(filmsItAppears => {
                this.setState({
                    filmsItAppears: filmsItAppears
                })
            });
        }
    }

    render() {
    	if ( this.state.isLoading ) {
    		return <Loading />
    	}

        if ( this.state.filmsItAppears.length ) {
            var films = this.state.filmsItAppears.map(function(film, i) {
                var id = film.data.url.replace('http://swapi.co/api/films/', '')
                return <li key={i}>
                        <Link to={'/films/'+id}>
                            {film.data.title}
                        </Link>
                       </li>
            })
        }

    	if ( !this.state.isLoading ) {
	    	return (
                <div>
            		<h1>{this.state.vehicle.name}</h1>
                    <h2>Basic info</h2>
                    <div>
                        <strong>Model: </strong>{this.state.vehicle.model}
                    </div>
                    <div>
                        <strong>Manufacturer: </strong>{this.state.vehicle.manufacturer}
                    </div>
                    <div>
                        <strong>Passengers: </strong>{this.state.vehicle.passengers}
                    </div>
                    <h2>Films it appears</h2>
                    <ul>{films}</ul>
                </div>
			)
		}
    }

}

export default vehicleDetails;
