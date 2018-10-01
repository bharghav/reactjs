import React, { Component } from 'react';

import Navbar from ".././components/Navbar.jsx";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            email_error:''
          };
    }

    

    handleUsernameChange(e) {
        this.setState({ username: e.target.value });
        let username = this.state.username;
        //console.log(uname);
        
        if( (username === '') || (username.length < 4) ){
            this.setState({ username_error: 'username is required' });
        }else{
            this.setState({ username_error: null });
        }
    }

    handlePasswordChange(e) {
        //this.setState({ value: e.target.value });
        this.setState({ password: e.target.value })
        let password = this.state.password;

        if( (password === '') || (password.length < 4) ){
            this.setState({ password_error: 'Password is required' });
        }else{
            this.setState({ password_error: null });
        }
    }
    
    contactSubmit(event){
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        if(username === ''){
            this.setState({ username_error: 'Username is required' });
            //this.setState({ password_error: 'Password is required' });
        }
        if(password === ''){
            this.setState({ password_error: 'Password is required' });
        }
        
        

        //console.log(this.state);

    }
    

    render() { 
        return ( 
            
            <div className="container">
                <Navbar></Navbar><br></br><br></br><br></br>
                <div className="Container">Login</div> 

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
			
                    <form onSubmit= {this.contactSubmit.bind(this)} >
                      <div className="form-group">
                        <label >Username</label>
                        <input type="username" className="form-control"  aria-describedby="emailHelp" placeholder="Enter username" value={this.state.username} onChange={this.handleUsernameChange.bind(this)}/>
                        <div id="username_error" style={{color:'red'}}>{this.state.username_error}</div>
                      </div>
                      <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control" name="password" id="password" placeholder="Password"  onChange={this.handlePasswordChange.bind(this)}/>
                      <div id="password_error" style={{color:'red'}}>{this.state.password_error}</div>
                      </div>
                      <div className="form-check">
                        {/* <button class="btn btn-info" type="button" name="showpassword" id="showpassword" value="Show Password">Show password</button> */}
                        <button type="submit" className="btn btn-primary" >Submit</button>
                      </div>
                      
                    </form>


			
		            </div>

                

            </div>
         );
    }
}

 
export default Login;