import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../helpers/api.js';
import Loading from '../home/Loading';

class vehiclesList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoading: true,
			vehicles: null
		}
	}

	componentWillMount() {
		api.getAllVehicles().then(vehicles => {
			this.setState({
				isLoading: false,
				vehicles: vehicles
			})
		});
	}

    render() {

    	if ( this.state.isLoading ) {
    		return <Loading />
    	}

    	if ( !this.state.isLoading ) {
	    	var vehicles = this.state.vehicles.results.map(function(vehicle, data) {
	    		var id = vehicle.url.replace('http://swapi.co/api/vehicles/', '')
    			return <li key={data}>
    					<Link to={'/vehicles/'+id}>
	    					{vehicle.name}
    					</Link>
					   </li>
     		})

	        return (
	            <div>
	            	<h1>Vehicles</h1>
	            	<ul>{vehicles}</ul>
	            </div>
	        )
     	}

    }
}

export default vehiclesList;
