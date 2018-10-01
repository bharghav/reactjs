import React, { Component } from 'react';

import Navbar from ".././components/Navbar.jsx";
import './About.css';
import SecondForm from ".././components/secondForm.jsx";

class About extends Component {
    render() {
      return (
        <div>
        <Navbar></Navbar>
        <br></br><br></br>
        <div className="container">
          <h2>About</h2>
          <p>Line 11:  Links must not point to "#". Use a more descriptive href or use a button instead  jsx-a11y/href-no-hash
                Line 19:  Links must not point to "#". Use a more descriptive href or use a button instead  jsx-a11y/href-no-hash
                Line 22:  Links must not point to "#". Use a more descriptive href or use a button instead  jsx-a11y/href-no-hash
                Line 25:  Links must not point to "#". Use a more descriptive href or use a button instead  jsx-a11y/href-no-hash
                Line 30:  Links must not point to "#". Use a more descriptive href or use a button instead  jsx-a11y/href-no-hash
                Line 31:  Links must not point to "#". Use a more descriptive href or use a button instead  jsx-a11y/href-no-hash
                Line 32:  Links must not point to "#". Use a more descriptive href or use a button instead  jsx-a11y/href-no-hash</p>
        <br></br>
        <SecondForm ></SecondForm>
        </div>
        
    </div>
      );
    }
}

export default About;
