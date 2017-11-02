import React, { Component } from 'react';

import {
  Route,
  Switch
} from 'react-router-dom'

import Authenticated from '/client/imports/components/Authenticated'

import Menu from '/client/imports/components/Menu';

import UsersContainer from '/client/imports/containers/UsersContainer';
import Dashboard from '/client/imports/components/Dashboard';
import NewsletterContainer from '/client/imports/containers/NewsletterContainer'

export default class AdminComponent extends Component {
  constructor(props) {
    super(props)
  }
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
            <Menu/>
          </div>
        </nav>
        <div className="container">
          <Switch>
            <Route exact path="/admin" component={Dashboard} />
            <Route exact path="/admin/users" component={UsersContainer} />
            <Route exact path="/admin/newsletters" component={NewsletterContainer }/>
          </Switch>
        </div>{/* /.container */}
      </div>
    )
  }
}
