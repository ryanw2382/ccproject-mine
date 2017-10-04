import React from 'react';
// import {Parallax} from 'react-materialize';
// import HomeDevs from './Home-Devs';
import Paper from 'material-ui/Paper';
import meet from '../../assets/meet.jpg';
// import { BrowserRouter as NavLink } from "react-router-dom";

const style = {
	height: 170,
	width: 170,
	margin: 22,
	textAlign: 'center',
	display: 'inline-block',
	offset: 1,
	
  };
  

export const HomePara = (props) => {
  return (
	<div  >
	<div class="col s5 pull-s7">
    <Paper style={style} zDepth={5} circle={true} />
    <Paper style={style} zDepth={5} circle={true}/>
    <Paper style={style} zDepth={5} circle={true}/>
    <Paper style={style} zDepth={5} circle={true}/>
	<Paper style={style} zDepth={5} circle={true}/>
	</div>
  </div>

)};

export default HomePara;