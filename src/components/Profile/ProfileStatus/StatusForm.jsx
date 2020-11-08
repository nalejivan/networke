import React from 'react';
import { Field, reduxForm } from 'redux-form';

const From = (props) => {
    const { handleSubmit } = props;
    return (
      <form onChange={handleSubmit} 
            onSubmit={handleSubmit}>
        <div>
          <Field 
              type="text" name="status" placeholder="My status" 
              component={"input"}
              onChange={props.onChangeStatus}
              /></div>
      </form>
    )
  }
  let StatusForm = reduxForm({
      form: 'myStatus',
      // initialValues: {
      //   'status': status,
      // }
  })(From)
  export default StatusForm;