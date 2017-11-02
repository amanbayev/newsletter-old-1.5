import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data'
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'

import Authenticated from '/client/imports/components/Authenticated'
import Public from '/client/imports/components/Public'
import AdminComponent from '/client/imports/components/AdminComponent';

import LoginContainer from '/client/imports/containers/LoginContainer';

const App = props => (
  <Router>
    <div>
      <Public exact path='/' component={ LoginContainer } {...props} />
      <Public exact path="/login" component={ LoginContainer } {...props} />
      <Authenticated path="/admin" component={ AdminComponent } {...props} />
    </div>
  </Router>
)

export default createContainer(() => {

  const loggingIn = Meteor.loggingIn()
  const user = Meteor.user()
  const userId = Meteor.userId()
  const loading = Roles.subscription ? !Roles.subscription.ready() : true

  return {
    loggingIn,
    loading,
    user,
    userId,
    authenticated: !loggingIn && !!userId,
    roles: !loading && Roles.getRolesForUser(userId),
  }
}, App)
