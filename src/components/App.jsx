import React, { Component, PropTypes } from 'react';
import { Module } from 'react-router-server';
import { Link, Match } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <span>&nbsp;</span>
        <Link to="/test">Click here</Link>
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
          pattern="/test"
          render={matchProps =>
            <Module module={() => System.import('./Test')}>
              {module => module ? <module.default {...matchProps}/> : null}
            </Module>
          }
        />
      </div>
    )
  }
}

export default App;
