import React from 'react';
import { Field, reduxForm} from 'redux-form';
import isEmail from 'sane-email-validation';
import fire from '../fire'

const validate = values => {
 const errors = {}
 if (!values.userName){
   errors.userName = 'Required'
 }
 if (!values.password){
  errors.password = 'Required'
}
if (values.password !== values.confirmPassword){
  errors.password = "Passwords Must Match!"
}
if (!values.email){
  errors.email = 'Required'
} else if (isEmail(values.email)){
  errors.email = 'Invalid email address!'
}
  return errors
};



let UserForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  let userRegValuesRef = fire
  .database
  .ref("userReg")
  .orderByKey();

  userRegValuesRef.on("child_added");

 addUser (e) {
  e.preventDefault()
   
  fire
        .database()
        .ref("userReg")
        .push(this.inputEl.value);
        this.inputEl.value = ""; 
  
 }

  return (
    <form onSubmit={handleSubmit = {addUser}}>
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
