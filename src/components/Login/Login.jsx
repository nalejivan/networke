import React from 'react';
import LoginFrom from './LoginForm'
import { connect } from 'react-redux';
import { loginThunk } from '../../redux/reducers/auth_reducer';

const Login = (props) => {
  const res = ({email, password, rememberMe = true, captcha = true}) => {
    debugger
    props.loginThunk(email, password, rememberMe, captcha)
  }
  return <LoginFrom onSubmit={res}/>
}
let mapStateToProps = (state) => {
  return {
    usersArr: state.auth.auth
  }
}
export default connect(mapStateToProps, { loginThunk })(Login)