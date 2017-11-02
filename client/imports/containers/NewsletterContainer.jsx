import React, { Component } from 'react';

import { createContainer } from 'meteor/react-meteor-data';
import {Newsletters} from '/imports/api/NewslettersCollection.js'
import NewsletterComponent from '/client/imports/components/NewsletterComponent'

export default createContainer( () => {
  Meteor.subscribe("Newsletters");
  return {
    newsletters: Newsletters.find().fetch(),
  }
}, NewsletterComponent);
