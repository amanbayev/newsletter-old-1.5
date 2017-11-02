import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class NewsletterComponent extends Component {
  constructor(props) {
    super(props)
  }
  renderCreateButton() {
    if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
      return (
        <div><button className="btn btn-primary">Создать &nbsp;<i className="fa fa-plus"></i></button></div>
      )
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
