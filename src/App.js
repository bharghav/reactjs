import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import Users from "./pages/Users.jsx";
import Login from "./components/Login.jsx";


//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/services" component={Service}/>
          <Route path="/users" component={Users}/>
          <Route path="/login" component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;
