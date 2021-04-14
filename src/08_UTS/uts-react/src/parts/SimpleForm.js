import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SimpleForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit} id="contact-form" class="tm-contact-form">
            <div class="form-group">
                <Field
                    id="contact_name"
                    name="contact_name"
                    component="input"
                    type="text"
                    placeholder="First Name"
                    class="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                    required=""
                />
            </div>
            <div class="form-group">
                <Field
                    id="contact_email"
                    name="contact_email"
                    component="input"
                    type="email"
                    placeholder="Your Email"
                    class="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                    required=""
                />
            </div>
            <div class="form-group">
                <Field
                    id="contact_message"
                    name="contact_message"
                    component="textarea"
                    type="email"
                    placeholder="Message..."
                    class="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                    rows="4"
                    required=""
                />
            </div>
            <div class="form-group mb-0">
                <button type="submit" class="btn rounded-0 d-block ml-auto tm-btn-primary" disabled={pristine || submitting}>Send It Now</button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'simple', // a unique identifier for this form
})(SimpleForm);