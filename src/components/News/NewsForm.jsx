import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Badge, Form } from 'react-bootstrap';
import { required, maxLength } from '../../utils/validation/validation';

const maxLength100 = maxLength(100);

const renderField = ({ input, label, type, placeholder, meta: { touched, error, warning } }) => (
  <Form.Group controlId="formBasicEmail">
      <Form.Label>{label}</Form.Label>
        <Form.Control {...input} placeholder={placeholder} type={type}/>
        <h4 className="text-muted">
          {touched && ((error && <Badge variant={'sec'}>{error}</Badge>) || (warning && <Badge variant={'warning'}>{warning}</Badge>))}
        </h4>
  </Form.Group>
)

const From = (props) => {
    const { handleSubmit } = props;
    return (
      <Form onSubmit={handleSubmit}>
        <div><Field type="text" 
                    name="news"
                    label="Yor new post" 
                    placeholder="NewPost" 
                    component={renderField}
                    validate={[ required, maxLength100 ]}/></div>
        <div><Button variant="primary" type="submit">test</Button></div>
      </Form>
    )
  }
  let NewsForm = reduxForm({ form: 'news' })(From)
  export default NewsForm;