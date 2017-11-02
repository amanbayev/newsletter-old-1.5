import React from 'react';

import NavLink from './NavLink'

const Menu = () => {
  return (
    <div id="navbar" className="collapse navbar-collapse">
      <ul className="nav navbar-nav">
        <NavLink to='/admin'>Дэшборд</NavLink>
        <NavLink to="/admin/newsletters">Ньюслеттеры</NavLink>
        <li><a href="#contact">Новости</a></li>
        <li><a href="#contact">Контакты</a></li>
        <NavLink to='/admin/users'>Пользователи</NavLink>
        <li><a href="#" onClick={ Meteor.logout.bind(this) }>Выйти</a></li>
      </ul>
    </div>
  )
}

export default Menu;
