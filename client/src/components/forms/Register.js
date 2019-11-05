import React from 'react';

// import style-component
// import style from 'styled-components';
// import API
import API from '../../utils/API';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''        }
    }

    handleSubmit = () => {
        console.log("here")
        API.newUser({
            username: this.state.username,
            password: this.state.password
        })
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }


    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="register-form">
                <div className="userRegister">
                    <label className="userlable" htmlFor="name">Username</label>
                    <input
                        className="form-control"
                        name="username"
                        placeholder="Username"
                        onChange={this.onChange} />
                </div>
                <div className="userRegister">
                    <label className="Userlabel" htmlFor="name">Password</label>
                    <input className="form-control"
                        name="password"
                        placeholder="Password"
                        onChange={this.onChange}
                        type="password" />
                </div>


                <button className="btn btn-outline" onClick={this.handleSubmit}>
                    <span>
                        Register                    
                    </span>
                </button>
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <br></br>
            </div>
            

        )
    }

}
export default Register;