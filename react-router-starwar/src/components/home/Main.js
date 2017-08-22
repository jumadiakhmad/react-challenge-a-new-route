import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Films from './../films/films';
import People from './../people/people';
import Vehicles from './../vehicles/vehicles';
import './mainContentWrapper.css';

export default class Main extends Component {
    render() {
        return (
            <div id="mainContentWrapper" className="width-limit">
	            <Switch>
	              <Route exact path='/' component={Home} />
	              <Route path='/vehicles' component={Vehicles} />
                <Route path='/films' component={Films} />
                <Route path='/peoples' component={People} />
	            </Switch>
            </div>
        );
    }
}
