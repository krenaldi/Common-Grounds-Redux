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
            <div className= "group1" >
                <div>
                        <h1 className="welcome">Create your Group</h1>
                    <div className="col group2">
                        <form>
                            <div>
                            <label className="profileLabel">
                            Group Name:
                            </label>
                            </div>
                            <div>
                            <input className="profileInput"
                                value={this.state.groupname}
                                onChange={this.handleInputChange}
                                name="groupname"
                            />
                            </div>

                            <div>
                            <label className="profileLabel">
                            Friend's Email:
                            </label>
                            </div>
                            <div>
                            <input className="profileInput"
                                value={this.state.friends}
                                onChange={this.handleInputChange}
                                name="friends"
                            />
                            </div>

<div>
                            <label className="profileLabel">
                            Location:
                            </label>
                            </div>

                            <div>
                            <input className="profileInput"
                                value={this.state.location}
                                onChange={this.handleInputChange}
                                name="location"
                            />
                            </div>

                            <div>
                            <button className = "groupbtn"
                                disabled={!(this.state.groupname && this.state.friends)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit Group
              </button>
              </div>
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
                                <h3>No Groups Created Yet</h3>
                            )}
                    </div>
                </div>
            </div>
        );
    }
}
const divStyle= {
    
    marginTop: '20px',
    marginBottom:'20px',
    marginRight:'50px',
    width: '100%'
}

export default CreateGroup;
