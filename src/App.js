import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";
import { Navbar, Nav } from 'reactstrap';
import {UserForm} from "./Components/user-registration";

const Login = () => <h1>Login</h1>;

const Links = () => (
    <div>
        <Navbar>
            <div className="w3-top">
                <div className="w3-bar w3-white w3-wide w3-padding w3-card-2">
                    <Nav>
                        <NavLink to="/" className="w3-bar-item w3-button" activeClassName="active">
                            <b>GET</b> Me A Job
                        </NavLink>
                        <div className="w3-right w3-hide-small">
                            <NavLink exact to="/register" className="w3-bar-item w3-button" activeClassName="active">
                                Register
                            </NavLink>
                            <NavLink exact to="/login" className="w3-bar-item w3-button" activeClassName="active">
                                Login
                            </NavLink>
                        </div>
                    </Nav>
                </div>
            </div>
        </Navbar>
    </div>
);



const App = () => (
    <Router>
        <div>
            <Links />
            <Route exact path="/" render={() => (<h1>Home</h1>)} />
            <Route exact path="/register" component={UserForm} />
            <Route exact path="/login" component={Login} />
        </div>
    </Router>
)



export default App;
