import React from 'react';

// import style-component
// import style from 'styled-components';
// import API
import API from '../../utils/API';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = () => {
        console.log("here")
        API.AddUser({
            email: this.state.email,
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
            <div className="login-form">
                <div className="userlogin">
                    <label className="userlable" htmlFor="name">Email</label>
                    <input
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        onChange={this.onChange} />
                </div>
                <div className="userlogin">
                    <label className="Userlabel" htmlFor="name">Password</label>
                    <input className="form-control"
                        name="password"
                        placeholder="Password"
                        onChange={this.onChange}
                        type="password" />
                </div>

                <button className="btn btn-outline" onClick={this.handleSubmit}>
                    <span>
                        Login
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
export default Login;