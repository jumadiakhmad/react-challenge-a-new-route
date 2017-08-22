import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../helpers/api.js';
import Loading from '../home/Loading';
import './filmsList.css';

export default class FilmList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoading: true,
			films: null,
			showSearch: false
		}
	}

	componentWillMount() {
		Api.getAllMovies().then(films => {
			this.setState({
				isLoading: false,
				films: films
			})
		});
	}

	render() {

    	if ( this.state.isLoading ) {
    		return <Loading />
    	}

    	if ( !this.state.isLoading ) {
	    	var movies = this.state.films.map(function(film, i) {
	    		var id = film.url.replace('http://swapi.co/api/films/', '')
    			return <li key={film.episode_id}>
    					<Link to={'/films/'+id}>
	    					{film.title}
    					</Link>
					   </li>
     		})

	        return (
	            <div>
	            	<header id="searchHeader">
	            		<h1>Films</h1>
	            	</header>
	            	<ul>{movies}</ul>
	            </div>
	        )
     	}

    }
}
