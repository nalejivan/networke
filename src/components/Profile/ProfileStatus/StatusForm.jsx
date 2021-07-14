import React from 'react';
import { Field, reduxForm } from 'redux-form';

const From = (props) => {
    const { handleSubmit, initialValues } = props;
    return (
      <form onSubmit={handleSubmit}>
        <Field 
          onMouseOut={props.onMouseOut}
          onBlur={props.onBlur}
          autoFocus={props.autoFocus}
          type="text" 
          name="status" 
          value={initialValues}
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