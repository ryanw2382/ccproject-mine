import React from 'react';
import { Field, reduxForm } from 'redux-form';
import submitUser from "../services/user-reg-fireDB";

let UserForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (

    <form onSubmit={handleSubmit(submitUser)}>
    <div>
    <label>User</label>
    <div>
      <label>
        <Field name="user" component="input" type="radio" value="Job-Candidate"/>
        {' '}
        Job-Candidate
      </label>
      <label>
        <Field name="user" component="input" type="radio" value="employer" />
        {' '}
        Employer
      </label>
    </div>
  </div>
      <div>
        <label>Username</label>
        <div>
          <Field
            name="userName"
            component="input"
            type="text"
            placeholder="User Name"
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
      <label>Create Password</label>
      <div>
        <Field
          name="createPassword"
          component="input"
          type="password"
          placeholder="Password"
        />
      </div>
    </div>
    <div>
    <label>Confirm Password</label>
    <div>
      <Field
        name="confirmPassword"
        component="input"
        type="password"
        placeholder="Password"
      />
    </div>
  </div>
  <div>{ {"user":"employer"}.checked && <span>Thank you, Jesus!</span> }</div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

UserForm = reduxForm({
  // a unique name for the form
  form: 'userform',
})(UserForm);

export {UserForm};

