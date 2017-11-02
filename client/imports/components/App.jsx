import React, { Component } from 'react';

import Menu from './Menu';

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#">QT Newsletter</a>
            </div>
            <Menu />
          </div>
        </nav>
        <div className="container">
          <h1>Test</h1>
        </div>{/* /.container */}
      </div>
    )
  }
}
