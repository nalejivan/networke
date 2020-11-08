import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import s from './Nav.module.css';

class Nav extends Component{
  render(){
    return(
      <div className={s.conteiner}>
        <div>
          <NavLink className={s.link} activeClassName={s.active} to='/profile'>Профиль</NavLink>
        </div>
        <div>
          <NavLink className={s.link} activeClassName={s.active} to='/dialogs'>Диалоги</NavLink>
        </div>
        <div>
          <NavLink className={s.link} activeClassName={s.active} to='/news'>Новости</NavLink>
        </div>
        <div>
          <NavLink className={s.link} activeClassName={s.active} to='/users'>Пользователи</NavLink>
        </div>
        <div>
          <NavLink className={s.link} activeClassName={s.active} to='/sittings'>Настройки</NavLink>
        </div>
      </div>
    )
  }
}
export default Nav;