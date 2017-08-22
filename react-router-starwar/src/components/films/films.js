import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import filmsList from './filmsList';
// import filmDetails from './filmDetails';

export default class Films extends Component {
    render() {
        return (
		  <Switch>
		    <Route exact path='/films' component={filmsList}/>
		  </Switch>
        );
    }
}
