import React from 'react';


// import API
import API from '../utils/API';
 
class Group extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groupname: '',
            friends:'',
            location: '',
            message:''
        }
    }

    handleSubmit = () => {
        console.log(this.state)
        API.CreateGroup({
            groupname: this.state.groupname,
            friends: this.state.friends,
            // friends: [this.state.friends],
            location: this.state.location,
            message: this.state.message
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
            <div className="Group-form" >
                <div className="createGroup">
                    <label className="grouplabel" htmlFor="name">Group Name</label>
                    <input
                        className="form-control"
                        name="groupname"
                        placeholder="Name your group"
                        onChange={this.onChange}
                        type="text" />
                </div>
                <br></br>
                <div className="createGroup">
                    <label className="grouplabel" htmlFor="name">Add Friends</label>
                    <input className="form-control"
                        name="friends"
                        placeholder="Email address of friends to add "
                        onChange={this.onChange}
                        type="email" />
                </div>
                <br></br>
                <div className="createGroup">
                    <label className="grouplabel" htmlFor="name">Location</label>
                    <input className="form-control"
                        name="location"
                        placeholder="Enter the name of the Place"
                        onChange={this.onChange}
                        type="search" />
                </div>
                <br></br>
                <div className="userGroup">
                    <label className="grouplabel" htmlFor="name">Message (optional)</label>
                    <input className="form-control"
                        name="message"
                        placeholder="Enter your Password again"
                        onChange={this.onChange}
                        type="text" />
                </div>
                <br></br>
                <hr></hr>
                <button className="btn btn-outline" onClick={this.handleSubmit}>
                    <span>
                    Done
                    </span>
                </button>
                <br></br>
                <br></br>
                <br></br>
                <hr></hr>


            </div>

        )
    }

}
export default Group;