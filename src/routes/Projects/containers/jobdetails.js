import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  firebaseConnect,
  isLoaded,
  isEmpty,
  dataToJS
} from 'react-redux-firebase'
import LoadingSpinner from 'components/LoadingSpinner'
import classes from './ProjectContainer.scss'

export const Project = ({ projects, params: { jobTitle , companyName, companyWebsite, companyLocation, salary, jobDescription, preferredSkills, devSelect } }) => (
    <div className={classes.container}>
      {projects[jobdetails] ? (
          <div>
            <h2>Project Container</h2>
            <pre>{JSON.stringify(projects[jobdetails], null, 2)}</pre>
          </div>
      ) : (
          <div className={classes.empty}>
            <span>Project Not Found</span>
          </div>
      )}
    </div>
)



