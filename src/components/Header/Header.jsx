import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

const Header = (props) => {
  return <div>
    <h2 className={s.top}>FreeNet</h2>
    <div className={s.login_linck}>
      {
        (props.auth !== false) 
        ? 
          <div>
            <Form inline>
              <Button onClick={props.logOutThunk} variant="outline-light">{props.login + ":: LogOut"}</Button>
            </Form>
          </div>
        : 
          <div>
            <Redirect to={"/login"}/>
            <Form inline>
              <NavLink className={"btn btn-outline-light"} to={'/login'}>::LogIn</NavLink>
            </Form>
          </div>   
      }
    </div>
  </div>
}
export default Header;