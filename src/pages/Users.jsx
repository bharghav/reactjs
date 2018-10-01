import React, { Component } from 'react';

import Navbar from ".././components/Navbar.jsx";

import FirstForm from ".././components/FirstForm.jsx";

//import './About.css';

//const $ = require( 'jquery' );
//$.DataTable = require( 'datatables.net' );

class Users extends Component {

  state = {
    fields: {}
  };
  onSubmit = fields =>{
    //console.log('app fields :', fields);
    this.setState({fields});
  };

    render() {
      return (
        <div>
        <Navbar></Navbar>
        <br></br><br></br>
        <div className="container">
          <h2>Users Form</h2>
          
          <FirstForm onSubmit={fields => this.onSubmit(fields)}></FirstForm>
          <p>
          {JSON.stringify(this.state.fields, null , 2)}
          </p>



        </div>
    </div>
      );
    }


    
}

export default Users;