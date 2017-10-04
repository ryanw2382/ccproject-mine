import React from 'react';
import {Parallax} from 'react-materialize';
import HomeDevs from './Home-Devs';
import meet from '../../assets/meet.jpg';
// import { BrowserRouter as NavLink } from "react-router-dom";

export const HomePara = (props) => {
  return (
    <div position="relative">
	<Parallax imageSrc={meet}/>
	<div className="section white">
		<div className="row container">
            <h2 className="header">Parallax</h2>
            <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
            <HomeDevs/>
		</div>
	</div>
	<Parallax imageSrc="http://materializecss.com/images/parallax2.jpg"/>
</div>
)};

export default HomePara;