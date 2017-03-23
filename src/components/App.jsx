import React, { Component } from 'react';
import { Module } from 'react-router-server';
import { Switch, Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import NoMatch from './NoMatch';
import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact (redirect)</Link></li>
            <li><Link to="/images/all">Images</Link></li>
            <li><Link to="/404">404</Link></li>
          </ul>
        </nav>
        <div className="content">
          <Switch>
            <Route
              exact
              path="/"
              render={matchProps => (
                <Module key="/" module={() => System.import('./Home')}>
                  {module => module ? <module.default {...matchProps}/> : null}
                </Module>
              )}
            />
            <Route
              exact
              path="/contact"
              render={() => <Redirect to="/about"/>}
            />
            <Route
              exact
              path="/about"
              render={matchProps =>
                <Module key="/about" module={() => System.import('./About')}>
                  {module => module ? <module.default {...matchProps}/> : null}
                </Module>
              }
            />
            <Route
              exact
              path="/images/all"
              render={matchProps =>
                <Module key="/images/all" module={() => System.import('./Images')}>
                  {module => module ? <module.default {...matchProps}/> : null}
                </Module>
              }
            />
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
