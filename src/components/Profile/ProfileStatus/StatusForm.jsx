import React from 'react';
import { Field, reduxForm } from 'redux-form';


const From = (props) => {
    const { handleSubmit } = props;
    return (
      <form onSubmit={handleSubmit}>
          <Field 
              type="text" 
              name="status" 
              value={props.initialValues}
              placeholder="My status" 
              component={"input"}
              className={"form-control"}/>
      </form>
    )
  }
  let StatusForm = reduxForm({
      form: 'myStatus'
  })(From)
  export default StatusForm;