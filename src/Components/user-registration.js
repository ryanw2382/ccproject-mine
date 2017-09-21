import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm, formValueSelector} from 'redux-form';
import isEmail from 'sane-email-validation';
import fire from '../fire'

const validate = values => {
 const errors = {}
 if (!values.firstName){
   errors.firstName = 'Required'
 }
 if (!values.lastName){
  errors.lastName = 'Required'
}
if (!values.email){
  errors.email = 'Required'
} else if (isEmail(values.email)){
  errors.email = 'Invalid email address !'
}
  return errors
};



let UserForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  const selector = formValueSelector('UserForm')

  return (
    <form onSubmit={ props.handleSubmit(doSubmit)}>
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
        <label htmlFor="userName" placeholder="Username">Create User Name</label>
        <Field name="userName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email" placeholder="E-mail">E-mail</label>
        <Field name="email" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password" placeholder="password">Create Password</label>
        <Field name="password" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="confirmPassword" placeholder="password">Confirm Password</label>
        <Field name="confirmPassword" component="input" type="text" />
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
  form: 'userform',
  validate
})(UserForm);

export {UserForm};
