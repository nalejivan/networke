import React from 'react';
import { Field, reduxForm } from 'redux-form';

const FormMessage = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name="message" tepe="text" placeholder="test" component={"input"}/>
            <button name="send">Send</button>
        </form>
    )
}

export default reduxForm({
    form: 'message'
})(FormMessage);