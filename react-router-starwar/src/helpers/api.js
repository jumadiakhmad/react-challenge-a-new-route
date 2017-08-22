const axios = require('axios');

module.exports = {
	getAllMovies () {
		return axios.get('https://swapi.co/api/films/')
			.then(function (response) {
				return response.data.results;
			})
			.catch(function (error) {
				console.error(error);
			})
	},

	getOneMovie (id) {
		return axios.get('https://swapi.co/api/films/'+id+'/')
			.then(function (response) {
				return (response.data);
			})
			.catch(function(error) {
				console.error(error);
			})
	},


	getMultipleFilms (moviesId = []) {
		moviesId = moviesId.map(function(x){
			return x.replace(/http/g,"https")
		})

		var movies = moviesId.map(function(url) {
		    return axios.get(url);
		});

		return axios.all( movies )
			.then(function (responses) {
				return responses
			})
			.catch(function (error) {
				console.error(error);
			})
	},


	getAllPeoples () {
		return axios.get('https://swapi.co/api/people/')
			.then(function(response) {
				return response.data;
			})
			.catch(function(error) {
				console.error(error);
			})
	},

	getOnePerson (id) {
		return axios.get('https://swapi.co/api/people/'+id+'/')
			.then(function (response) {
				return response.data;
			})
			.catch(function (error) {
				console.error(error);
			})
	},

	getMultiplePeople (peopleId = []) {
		peopleId = peopleId.map(function(x){
			return x.replace(/http/g,"https")
		})

		var characters = peopleId.map(function(url){
		    return axios.get(url);
		});

		return axios.all( characters )
			.then(function (responses) {
				return responses
			})
			.catch(function (error) {
				console.error(error);
			})
	},

	getAllVehicles () {
		return axios.get('https://swapi.co/api/vehicles/')
			.then(function(response) {
				return response.data;
			})
			.catch(function(error) {
				console.error(error);
			})
	},

	getOneVehicle (id) {
		return axios.get('https://swapi.co/api/vehicles/'+id+'/')
			.then(function(response) {
				return response.data;
			})
			.catch(function(error) {
				console.error(error);
			})
	},

	getMultipleVehicles (vehiclesId = []) {
		vehiclesId = vehiclesId.map(function(x){
			return x.replace(/http/g,"https")
		})

		var characters = vehiclesId.map(function(url){
		    return axios.get(url);
		});

		return axios.all( characters )
			.then(function (responses) {
				return responses
			})
			.catch(function (error) {
				console.error(error);
			})
	},
}
