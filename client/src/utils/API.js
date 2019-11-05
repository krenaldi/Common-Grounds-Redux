import axios from 'axios';

export default {

    // Login
    newUser: function (data) {
        return axios.post("/api/user/register", data);
    },
    getUser: function (data) {
        return axios.post("/api/user/login", data);
    },
    // Group
    CreateGroup: function (data) {
        return axios.post("/api/group", data);
    }
}
 