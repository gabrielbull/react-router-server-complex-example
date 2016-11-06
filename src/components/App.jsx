import React, { Component, PropTypes } from 'react';
import { Module } from 'react-router-server';
import { Link, Match, Miss, Redirect } from 'react-router';
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
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/images/all">Images</Link></li>
            <li><Link to="/404">404</Link></li>
          </ul>
        </nav>
        <div className="content">
          <Match
            exactly
            pattern="/"
            render={matchProps => (
              <Module module={() => System.import('./Home')}>
                {module => module ? <module.default {...matchProps}/> : null}
              </Module>
            )}
          />
          <Match
            exactly
            pattern="/contact"
            render={() => <Redirect to="/about"/>}
          />
          <Match
            exactly
            pattern="/about"
            render={matchProps =>
              <Module module={() => System.import('./About')}>
                {module => module ? <module.default {...matchProps}/> : null}
              </Module>
            }
          />
          <Match
            exactly
            pattern="/images/all"
            render={matchProps =>
              <Module module={() => System.import('./Images')}>
                {module => module ? <module.default {...matchProps}/> : null}
              </Module>
            }
          />
          <Miss component={NoMatch} />
        </div>
      </div>
    )
  }
}

export default App;
