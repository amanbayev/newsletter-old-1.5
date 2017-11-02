import React from 'react'
import { render } from 'react-dom'

import App from '/client/imports/components/App';
import LoginContainer from '/client/imports/containers/LoginContainer';

Meteor.startup(function(){
  render(
    <LoginContainer />,
    document.getElementById('render-target')
  )
});
