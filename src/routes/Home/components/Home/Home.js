import React from 'react';
import Theme from '../../../../theme';
import HomeMain from './Home-Main';
import HomeFooter from "./Home-Footer";
import HomePara from "./Home-Parallax"
import HomeDevs from "./Home-Devs";
import HomeBack from "./Home-Back";
// import { Link } from 'react-router';
// import { paths } from '../../../../constants';
// import classes from './Home.scss';
// const authWrapperUrl = 'https://github.com/mjrussell/redux-auth-wrapper';
// const reactRouterUrl = 'https://github.com/ReactTraining/react-router';
export const Home = () => {
  return (
  <div>
  
    <HomeBack/>
  <HomeFooter />
  </div>
  

  )};
   
export default Home;