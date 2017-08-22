import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import peopleList from './peopleList';


export default class People extends Component {
    render() {
        return (
		  <Switch>
		    <Route exact path='/peoples' component={peopleList}/>
		  </Switch>
        );
    }
}
