import React from 'react';
import LoginFrom from './LoginForm'
import { connect } from 'react-redux';
import { loginThunk, logOutThunk } from '../../redux/reducers/auth_reducer';
import { Redirect } from 'react-router-dom';

const Login = ({auth, userId, loginThunk}) => {
  if(auth === true){
    return <Redirect to={"profile/" + userId}/>
  }
  const handleSubmit = ({ email, password, rememberMe = true, captcha = true }) => 
        loginThunk(email, password, rememberMe, captcha)
  return <LoginFrom onSubmit={handleSubmit} email={userId}/>


}
let mapStateToProps = (state) => {
  return { 
    auth: state.auth.auth,
    userId: state.auth.userId }
}
export default connect(mapStateToProps, { loginThunk, logOutThunk })(Login)