import React, { Component } from 'react'
import ProfileView from '../components/ProfileView/ProfileView'
//import './ProfileContainer.scss'
import Paper from 'material-ui/Paper';
import classes from './ProfileContainer.scss';
import RaisedButton from 'material-ui/RaisedButton';





export default class Profile extends Component {

     

  render() {
        return (
/*Most of this will be replaced by components. For example under the first <Paper> tag there be a <BasicInfo />
component as well as a <WorkExp /> and <Education />*/
        <div >
          <div >
            <RaisedButton
            primary
            label='Update Profile'
            type='submit'
            className={classes.submit}
            />
            <Paper className={classes.pane} >
              <h2>Basic Info</h2>
              <div className={classes.stuff} >
                <img  alt="ProfilePic"/>
                <p >Name:</p>
                <p>Jobtitle:</p>
                <p>Location:</p>
                <p>Programming Skills:</p>
              </div>
            </Paper>

            <Paper className={classes.pane} >
              <h2>Work Expierence</h2>
              <p>JobTitle / Company</p>
              <p>Date Empolyed</p>
              <p>Job Description:</p>
            </Paper>

            <Paper className={classes.pane} >
              <h2>Education</h2>
              <p>School Name:</p>
              <p>Date Attended</p>
              <p>Degree</p>
            </Paper>
            
          </div>  
        </div>
    )
  }
}
