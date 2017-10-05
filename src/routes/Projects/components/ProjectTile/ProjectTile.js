import React from "react";
import PropTypes from "prop-types";
import Paper from "material-ui/Paper";
import { isObject } from "lodash";
import IconButton from "material-ui/IconButton";
import DeleteIcon from "material-ui/svg-icons/action/delete";
import classes from "./ProjectTile.scss";

export const ProjectTile = ({ project, onSelect, onDelete, showDelete }) => (
  <Paper className={classes.container}>
    <div className={classes.top}>
      <div>
        <span className={classes.jobName} onClick={() => onSelect(project)}>
          <div className={classes.flexItem}>{project.jobName}</div>
        </span>
        <div className={classes.flexItem}>
          <b>Salary: </b>
          {project.salary}
        </div>
        <div className={classes.flexItem}>
          <b>Preferred Skills: </b>
          {project.preferredSkills}
        </div>
        <div className={classes.flexItem}>
          <b>Dev Selected</b>
          {project.devSelect}
        </div>
      </div>

      {showDelete && onDelete ? (
        <IconButton tooltip="delete" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      ) : null}
    </div>
    <span className={classes.owner}>
      {isObject(project.createdBy)
        ? project.createdBy.displayName
        : project.createdBy || "No Owner"}
    </span>
  </Paper>
);

ProjectTile.propTypes = {
  project: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  showDelete: PropTypes.bool
};

export default ProjectTile;
