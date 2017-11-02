import React, { Component } from 'react';

export default class LoginComponent extends Component {
  render() {
    return (
      <div className="signing-body">
        <div className="container">
          <form className="form-signin">
            <h2 className="form-signin-heading">Войдите в систему</h2>
            <label htmlFor="inputEmail" className="sr-only">Email</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email" required autoFocus />
            <label htmlFor="inputPassword" className="sr-only">Пароль</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Пароль" required />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Войти</button>
          </form>
        </div>
      </div>
    )
  }
}
