import React from 'react'
import { render } from 'react-dom'

import App from '/client/imports/components/App';
import LoginComponent from '/client/imports/components/LoginComponent';

Meteor.startup(function(){
  render(
    <LoginComponent />,
    document.getElementById('render-target')
  )
});
