import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class NewsletterComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      creatingNewsletter: false
    }
  }
  renderCreateButton() {
    if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
      if (this.state.creatingNewsletter) {
        return (
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Panel title</h3>
            </div>
            <div className="panel-body">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputFile">File input</label>
                  <input type="file" id="exampleInputFile" />
                  <p className="help-block">Example block-level help text here.</p>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" /> Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
            </div>
          </div>
        )
      } else {
        return (
          <div><button className="btn btn-primary" onClick={()=>{ this.setState({creatingNewsletter: true})}}>Создать &nbsp;<i className="fa fa-plus"></i></button></div>
        )
      }
    } else {
      return (<div></div>)
    }

  }
  renderNewsletters() {
    let newsletters = this.props.newsletters
    return newsletters.map((newsletter, index) => (
      <tr className="gradeX" key={ index }>
        <td>
          {index + 1}
        </td>
        <td><Link to={`/admin/newsletters/${newsletter.name}`}>{ newsletter.date }</Link></td>
      </tr>
    ))
  }
  render() {
    return (
      <div>
        <h1>Ньюслеттеры</h1>
        {this.renderCreateButton()}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">№</th>
              <th scope="col">Дата</th>
            </tr>
          </thead>
          <tbody>
            {this.renderNewsletters()}
          </tbody>
        </table>

      </div>
    )
  }
}
