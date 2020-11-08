import React from 'react';
import { Field, reduxForm } from 'redux-form';
/*
!Logon
 TODO: 923i2
 ?
*/


const From = (props) => {
    const { handleSubmit } = props;
    return (
      <form onSubmit={handleSubmit}>
        <div><Field type="text" name="email" placeholder="login" component={"input"}/></div>
        <div><Field type="password" name="password" placeholder="password" component={"input"}/></div>
        <div><input type="submit" name="in" value="Login" /></div>
      </form>
    )
  }
  let LoginFrom = reduxForm({
      form: 'login'
  })(From)
  export default LoginFrom;