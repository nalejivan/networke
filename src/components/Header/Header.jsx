import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return <div>
    <div className={s.top}>Свободная сеть</div>
    <div className={s.login_linck}>
    <NavLink to={'/login'}> {(props.auth !== false)? props.login: 'Login'}</NavLink>
    </div>
  </div>
}
export default Header;