import React, { Component } from 'react';
import API from '../utils/API';

class Register extends Component {


    state = {
            username:"",
            email:"",
            password:"",
            city:"",
            state:""
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
         API.newuser()
         .then( res => this.setState({ user: res.data }))
         .catch(err => console.log(err));
    }
    handleInputChange = event => {
        // console.log(event)
        this.setState({
            [event.target.name] : event.target.value
        }) 
    };

    render() {
        return (
            <div className="conatiner">
                <div className="conatinerRegister">
                <form onSubmit={this.handleSubmit} className="registerForm">
                    <h2>Register</h2>
                    <div className="input-field">
                        <label htmlFor="text">Username</label>
                        <input type= "text" className="inputRegister" name= "username" onChange= {this.handleInputChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type= "email" className="inputRegister" name= "email" onChange= {this.handleInputChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type= "password" className="inputRegister" name="password" onChange= {this.handleInputChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">City</label>
                        <input type= "text" className="inputRegister" name="city" onChange= {this.handleInputChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">state</label>
                        <input type= "text" className="inputRegister" name= "state" onChange= {this.handleInputChange}/>
                    </div>
                    <button className="userbtn">
                        Register
                    </button>
                </form>
                </div>

        </div>
        );
    }

};

export default Register;