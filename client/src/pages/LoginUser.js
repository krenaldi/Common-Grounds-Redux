import React, { Component } from 'react';
import Register from './Register';
import API from '../utils/API';

class User extends Component {


    state = {
        email: "",
        password: ""
    }
    handleSubmit = event => {
        event.preventDefault();
        API.loginUser(this.state)
            .then(res => this.setState({ user: res.data }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        // console.log(event)
        this.setState({
            [event.target.name]: event.target.value
        })
    };


    render() {

        return (
            <>
                <div className="conatiner">
                    <div className="conatinerLogin">
                        <form onSubmit={this.handleSubmit} className="loginForm" >
                            <h2 className="formH2">Login</h2>
                            <div className="input-fieldLogin">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="inputLogin" name="email" onChange={this.handleInputChange}
                                    required />
                            </div>
                            <div className="input-field">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="inputLogin" name="password" onChange={this.handleInputChange}
                                    required />
                            </div>
                            <button className="userbtn">
                                Login
                    </button>
                        </form>
                    </div>
                </div>
                <div>
                    <Register />
                </div>
            </>
        );
    }

};


export default User;