import React, { Component } from 'react';

import { createContainer } from 'meteor/react-meteor-data';

import LoginComponent from '/client/imports/components/LoginComponent'

export default createContainer( () => {
  Meteor.subscribe("allUsers");
  return {
    users: Meteor.users.find().fetch(),
  }
}, LoginComponent);
