import React, { Component } from 'react';
import Column from '../components/wrappers/Column';
import API from '../utils/API';

class Profile extends Component {


    state = {
        user: {
            displayName: "",
            photo: "",
            city: "",
            state: ""
        },
        alreadyHasCity: false
    }

    componentDidMount() {
        this.loadProfile();
    }

    loadProfile = () => {
        API.getProfile()
            .then(res => {
                console.log(res.data);
                const userData = {
                    displayName: res.data.username,
                    photo: res.data.photo,
                    city: res.data.city || "",
                    state: res.data.state || ""
                }
                const hasCity = res.data.city ? true : false
                this.setState({
                    user: userData,
                    alreadyHasCity: hasCity
                })
                console.log("user: " + userData);
                console.log("alreadyHasCity: " + hasCity);
            })
            .catch(err => console.log(err));
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        const user = this.state.user;
        user[name] = value;
        this.setState({
            user
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.city && this.state.state) {
            API.updateProfile({
                city: this.state.city,
                state: this.state.state
            })
                .then(res => this.loadProfile())
                .catch(err => console.log(err));

        }
    }

    render() {
        return (
            <div className="profilePage">

                <Column className="col-4" style={{ verticalAlign: "top" }}>
                    <img src={this.state.user.photo} className="profilePic" alt="Profile" />
                </Column>

                <Column className="col-8">
                    {this.state.alreadyHasCity ?
                        <div>
                            <h1 className="welcome"> Welcome {this.state.user.displayName}</h1>
                            <label> City</label>
                            {this.state.user.city}
                            <label>State</label>
                            {this.state.user.state}
                        </div>
                        :
                        <div className="user_profile">
                            <h1 className="welcome"> Welcome {this.state.user.displayName}</h1>
                            <label className="profileLabel"> City: </label>
                            <input className = "profileInput" name="city" value={this.state.user.city} onChange={this.handleInputChange} />
                            <label className = "profileLabel">State:</label>
                            <input className = "profileInput" name="state" value={this.state.user.state} onChange={this.handleInputChange} />
                            <button className="profilebtn" onChange={this.handleSubmit} > Update Profile</button>
                        </div>
                    }
                </Column>
                <div style={{ marginBottom: 20 }} />
            </div>
        );
    }

};

export default Profile;