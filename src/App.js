import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";
import UserForm from "./Components/user-registration";
import { Navbar, Nav } from 'reactstrap';
import "./Components/Footer";

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

);



export default App;



//The coded out code lines 7-51 was coded by drew for testing. -SDG

//
//   constructor(props) {
//     super(props);
//     this.state = { messages: [] }; // <- set up react state
//   }
//   componentWillMount() {
//     /* Create reference to messages in Firebase Database */
//     let messagesRef = fire
//       .database()
//       .ref("messages")
//       .orderByKey()
//       .limitToLast(100);
//     messagesRef.on("child_added", snapshot => {
//       /* Update React state when message is added at Firebase Database */
//       let message = { text: snapshot.val(), id: snapshot.key };
//       this.setState({ messages: [message].concat(this.state.messages) });
//     });
//   }
//   addMessage(e) {
//     e.preventDefault(); // <- prevent form submit from reloading the page
//     /* Send the message to Firebase */
//     fire
//       .database()
//       .ref("messages")
//       .push(this.inputEl.value);
//     this.inputEl.value = ""; // <- clear the input
//   }
//   render() {
//     return (
//       <form onSubmit={this.addMessage.bind(this)}>
//         <input type="text" ref={el => (this.inputEl = el)} />
//         <input type="submit" />
//         <ul>
//           {/* Render the list of messages */
//           this.state.messages.map(message => (
//             <li key={message.id}>{message.text}</li>
//           ))}
//         </ul>
//       </form>
//     );
//   }
// }
//
// export default App;

export default class App extends Component {
 
  submit = (values) => {
    console.log(values);
  }
  render() {
    return (
      <UserForm  />
    );
  }
}

