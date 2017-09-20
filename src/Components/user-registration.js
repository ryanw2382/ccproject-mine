import React from 'react';
import { Field, reduxForm } from 'redux-form';

let UserForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={ handleSubmit }>
    <div>
    <label>User</label>
    </div>
    <div>
      <label>
        <Field
          name="user"
          component="input"
          type="radio"
          value="job-candidate"
          />{' '}
          Job-Candidate
       </label>
       <label>
        <Field
          name="user"
          component="input"
          type="radio"
          value="employer"
          />{' '}
          Employer
        </label>
      </div>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="middleName">Middle Name</label>
        <Field name="middleName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <Field name="email" component="input" type="text" />
      </div>
      <div>
       <label htmlFor="phone">Phone Number</label>
       <Field name="phone" component="input" type="text" />
     </div>
     <div>
      <label htmlFor="website">Website</label>
      <Field name="website" component="input" type="text" />
    </div>
    <div>
    <button type="submit" disabled={pristine || submitting}>
      Submit
    </button>
    <button type="button" disabled={pristine || submitting} onClick={reset}>
      Clear Values
    </button>
  </div>
    </form>
  )
}



UserForm = reduxForm({
  // a unique name for the form
  form: 'userform'
})(UserForm);

export {UserForm};
