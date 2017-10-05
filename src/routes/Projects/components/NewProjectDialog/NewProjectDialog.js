import React from "react";
import PropTypes from "prop-types";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import { Field, reduxForm } from "redux-form";
import { TextField } from "redux-form-material-ui";
import { required } from "utils/form";
import { NEW_PROJECT_FORM_NAME } from "constants";
import DatePicker from "material-ui/DatePicker";
import classes from "./NewProjectDialog.scss";

export const NewProjectDialog = ({
  open,
  onRequestClose,
  submit,
  handleSubmit
}) => (
  <Dialog
    title="New Job"
    open={open}
    onRequestClose={onRequestClose}
    contentClassName={classes.container}
    actions={[
      <FlatButton label="Cancel" secondary onTouchTap={onRequestClose} />,
      <FlatButton label="Create" primary onTouchTap={submit} />
    ]}
    autoScrollBodyContent={true}
  >
    <form onSubmit={handleSubmit} className={classes.inputs}>
      <Field
        name="jobName"
        component={TextField}
        floatingLabelText="Job Name"
        validate={[required]}
      />
      <Field
        name="companyName"
        component={TextField}
        floatingLabelText="Company Name"
        validate={[required]}
      />
      <Field
        name="companyWeb"
        component={TextField}
        floatingLabelText="Company Website"
        validate={[required]}
      />
      <Field
        name="companyLocation"
        component={TextField}
        floatingLabelText="Company Location"
        validate={[required]}
      />
      <Field
        name="salary"
        component={TextField}
        floatingLabelText="Salary"
        validate={[required]}
      />
      <Field
        name="jobDescription"
        component={TextField}
        floatingLabelText="Job Description"
        validate={[required]}
        multiLine={true}
        rows={4}
        rowsMax={10}
      />
      <Field
        name="jobRequirements"
        component={TextField}
        floatingLabelText="Job Requirements"
        validate={[required]}
        multiLine={true}
        rows={4}
        rowsMax={10}
      />
      <Field
        name="preferredSkills"
        component={TextField}
        floatingLabelText="Preferred Skills"
        validate={[required]}
        multiLine={true}
        rows={2}
        rowsMax={2}
      />
      <Field
        name="devSelect"
        component={TextField}
        floatingLabelText="Dev Select"
        validate={[required]}
      />
      <div>
        <DatePicker hintText="Start Date" />
      </div>
    </form>
  </Dialog>
);

NewProjectDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
  handleSubmit: PropTypes.func.isRequired, // added by redux-form
  submit: PropTypes.func.isRequired // added by redux-form
};

export default reduxForm({
  form: NEW_PROJECT_FORM_NAME
})(NewProjectDialog);
