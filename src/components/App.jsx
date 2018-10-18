import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import 'isomorphic-fetch';
import 'es6-promise';
import HomePage from './HomePage';
import Films from './Films';
import Film from './Film';
import People from './People';
import Person from './Person';

class App extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <React.Fragment>
            <Router>
                <Fragment>
                    <div className="d-flex justify-content-center">
                        <Link className="btn btn-danger justify-item-center m-3 d-flex"         to="/" >Go Home</Link>
                        <Link className="btn btn-danger justify-item-center m-3 d-flex"         to="/films" >View Films</Link>
                        <Link className="btn btn-danger justify-item-center m-3 d-flex"         to="/people" >View People</Link>
                    </div>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/films" component={Films} />
                        <Route exact path="/films/:id" component={Film} />
                        <Route exact path="/people" component={People} />
                        <Route exact path="/people/:id" component={Person} />
                    </Switch>
                </Fragment>
            </Router>
            </React.Fragment>
        )
    }
}

export default App;