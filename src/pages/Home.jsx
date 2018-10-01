import React, { Component } from 'react';

import Navbar from ".././components/Navbar.jsx";
import './Home.css';

class Home extends Component {
    render() {
      return (
        <div>
            <Navbar></Navbar>
            <br></br><br></br>
            <div className="container">
              <h2>Home</h2>
              <p>Line 11:  Links must not point to "#". Use a more descriptive href or use a button instead  jsx-a11y/href-no-hash
                    Line 19:  Links must not point to "#". Use a more descriptive href or use a button instead  jsx-a11y/href-no-hash
                    Line 22:  Links must not point to "#". Use a more descriptive href or use a button instead  jsx-a11y/href-no-hash
                    Line 25:  Links must not point to "#". Use a more descriptive href or use a button instead  jsx-a11y/href-no-hash
                    Line 30:  Links must not point to "#". Use a more descriptive href or use a button instead  jsx-a11y/href-no-hash
                    Line 31:  Links must not point to "#". Use a more descriptive href or use a button instead  jsx-a11y/href-no-hash
                    Line 32:  Links must not point to "#". Use a more descriptive href or use a button instead  jsx-a11y/href-no-hash</p>

            </div>
        </div>
      );
    }
}

export default Home;