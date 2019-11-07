import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import Map from "../components/map";
import { mapLogic } from '../utils/latlon';
import { Link } from "react-router-dom";


class CreateGroup extends Component {
    state = {
        user: {},
        groups: [],
        groupname: "",
        friends: "" || [],
        location: ""
    };

    componentDidMount() {
        console.log(window.location.href);
        const hrefSplit = window.location.href.split("/");
        const id = hrefSplit[hrefSplit.length - 1];
    
        console.log(id);
    
        API.getallGroups(id).then(response => this.setState({ user: response.data }))
    }


    function = () => {
        API.getGroups()
            .then(res =>
                this.setState({ group: res.data, groupname: "", friends: "", location: "" }))
            .catch(err => console.log(err));
    };

    deleteGroup = id => {
        API.deleteGroup(id)
            .then(res => this.loadGroups())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.groupname && this.state.friends) {
            API.createGroup({
                groupname: this.state.groupname,
                friends: this.state.friends,
                city: this.state.city,
                state: this.state.state
            })
                .then(res => this.loadGroups())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div className= "container-fluid" style={divStyle}>
                <div className= "row" style={divStyle}>
                
              <Map />
            
                        
                </div >
                <div className= "row">
                    <div className="col col-8">
                <h1>Create your Group</h1>
                        <form>
                            <input
                                value={this.state.groupname}
                                onChange={this.handleInputChange}
                                name="groupname"
                                placeholder="Group Name (required)"
                            />
                            <input
                                value={this.state.friends}
                                onChange={this.handleInputChange}
                                name="friends"
                                placeholder=" Enter your friends email (optional)"
                            />
                            <input
                                value={this.state.city}
                                onChange={this.handleInputChange}
                                name="city"
                                placeholder="city (required)"
                            />
                            <input
                                value={this.state.state}
                                onChange={this.handleInputChange}
                                name="state"
                                placeholder="state (required)"
                            />
                            <button
                                disabled={!(this.state.groupname && this.state.friends)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit Group
              </button>
                        </form>
                    </div>
                    <div className= "col col-4">

                        {this.state.groups.length ? (
                            <ul>
                                {this.state.groups.map(group => (
                                    <li key={group._id}>
                                        <Link to={"/groups/" + group._id}>
                                            <strong>
                                                {group.groupname} by {group.friends}
                                            </strong>
                                        </Link>
                                        <button onClick={() => this.deleteGroup(group._id)} >
                                            Delete Group
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                                <h3>No Groups Created yet.... !!!</h3>
                            )}
                    </div>
                </div>
            </div>
        );
    }
}
const divStyle= {
    color: 'black',
    marginLeft: '200px',
    marginTop: '20px',
    width: '100%'
}

export default CreateGroup;
