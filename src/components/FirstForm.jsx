import React, { Component } from 'react';

class FForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: ""

      };
    //function defined
    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    formSubmit = (event) => {
        event.preventDefault(this.state);
        this.props.onSubmit(this.state);
        //console.log(this.state); 
        //return false;
        this.setState({
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: ""
        });
    };

    render() { 
        return ( 
            <div>
                <form>
                    <input 
                    name="firstName"
                    placeholder="First Name"
                    value={this.state.firstName}
                    type="text"
                    onChange={e => this.change(e)}
                    /><br></br>

                    <input 
                    name="lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    type="text"
                    onChange={e => this.change(e)}
                    /><br></br>

                    <input 
                    name="userName"
                    placeholder="User Name"
                    value={this.state.userName}
                    type="text"
                    onChange={e => this.change(e)}
                    /><br></br>

                    <input 
                    name= "password"
                    placeholder="Password"
                    value={this.state.password}
                    type="password"
                    onChange={e => this.change(e)}
                    /><br></br>

                    <input 
                    name= "email"
                    placeholder="Email"
                    value={this.state.email}
                    type="text"
                    onChange={e => this.change(e)}
                    /><br></br>
                    
                    <button onClick={(e) => this.formSubmit(e)}>
                        Submit
                    </button>

                </form>

            </div>
         );
    }
}
 
export default FForm;

