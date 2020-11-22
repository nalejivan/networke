import React from 'react';
import LoginFrom from './LoginForm'
import { connect } from 'react-redux';
import { loginThunk, logOutThunk } from '../../redux/reducers/auth_reducer';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
  const handleSubmit = ({ email, password, rememberMe = true, captcha = true }) => 
        props.loginThunk(email, password, rememberMe, captcha);
  if(props.auth === true){
    return <Redirect to={"profile/" + props.userId}/>
  }
  
  return <LoginFrom onSubmit={handleSubmit}/>


}
let mapStateToProps = (state) => {
  return { 
    auth: state.auth.auth,
    userId: state.auth.userId }
}
export default connect(mapStateToProps, { loginThunk, logOutThunk })(Login)