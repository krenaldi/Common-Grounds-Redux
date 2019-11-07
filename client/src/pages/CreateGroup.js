import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";

class CreateGroup extends Component {
    state = {
        groups: [],
        groupname: "",
        friends: "" || [],
        location: ""
    };


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
                location: this.state.location,
                message: this.state.message
            })
                .then(res => this.loadGroups())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div className= "container-fluid" style={divStyle}>
                <div className= "row" style={divStyle}>
                        <h1>Create your Group</h1>
                    <div className="col">
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
                                placeholder=" Enter your friends email (required)"
                            />
                            <input
                                value={this.state.location}
                                onChange={this.handleInputChange}
                                name="location"
                                placeholder="location (Optional)"
                            />
                            <button
                                disabled={!(this.state.groupname && this.state.friends)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit Group
              </button>
                        </form>
                    </div>
                </div >
                <div className= "row">
                        <h1>Groups On My List</h1>
                    <div className= "col">

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
