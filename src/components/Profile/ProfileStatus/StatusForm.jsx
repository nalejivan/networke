import React from 'react';
import { Field, reduxForm } from 'redux-form';


const From = (props) => {
    console.info("RENDER: From", props.initialValues)
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
  //! enableReinitialize: true - нужно почитать про свойство
  let StatusForm = reduxForm({
      form: 'myStatus'
  })(From)
  export default StatusForm;