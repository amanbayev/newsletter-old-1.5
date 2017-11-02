import React, { Component } from 'react';

import { createContainer } from 'meteor/react-meteor-data';

import UsersComponent from '/client/imports/components/UsersComponent'

export default createContainer( () => {
  Meteor.subscribe("allUsers");
  return {
    users: Meteor.users.find().fetch(),
  }
}, UsersComponent);
