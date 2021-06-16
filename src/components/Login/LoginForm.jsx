import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { required, minLenght, emailValid } from '../../utils/validation/validation';
import s from './Login.module.css';

const minLenght4 = minLenght(4);
const loginInput = ({input, label, placeholder, type, meta: { touched, error, warning } }) => (
  <Form.Group>
    <Form.Label>{label}</Form.Label>
    <Form.Control {...input} placeholder={placeholder} type={type}/>
    
      {touched && ((error && <div className="text-danger" variant={'sec'}>{error}</div>) || (warning && <div className="alert alert-danger" variant={'warning'}>{warning}</div>))}
    
  </Form.Group>
)

const passInput = ({input, label, placeholder, type, meta: { touched, error, warning } }) => (
  <Form.Group>
  <Form.Label>{label}</Form.Label>
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
      </InputGroup.Prepend>
      <Form.Control {...input} placeholder={placeholder} type={type}/>
    </InputGroup>
 
      {touched && ((error && <div className="text-danger" variant={'sec'}>{error}</div>) || (warning && <div className="alert alert-danger" variant={'warning'}>{warning}</div>))}
  
  </Form.Group>
);

const From = ({ handleSubmit, pristine, submitting, error, email }) => {

    if(error === false){
      console.log(error)
    }
    return (
      <form onSubmit={handleSubmit} className={s.form}>
        <div><Field type="text" 
                    name="email" 
                    label="Login email:"
                    placeholder="login" 
                    component={loginInput}
                    validate={[required, minLenght4, emailValid]}/></div>
        <div><Field type="password" 
                    name="password" 
                    label="Password:"
                    placeholder="password" 
                    component={passInput}
                    validate={[required, minLenght4]}/></div>
        <div>
          {error && <div className="text-danger"> {error} </div>}
        </div>
        <div><Button disabled={pristine || submitting} variant="primary" type="submit">Sign in</Button></div>
        
      </form>
    )
  }
  let LoginFrom = reduxForm({
      form: 'login'
  })(From);
  export default LoginFrom;