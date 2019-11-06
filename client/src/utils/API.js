import axios from 'axios';

export default {
    // Create group
    CreateGroup: function (data) {
        return axios.post("/api/group", data);
    },
    // Get Profile data
    getProfile: function(id) {
        return axios.get("/user");
    },
    // Update Profile data
    updateProfile: function(userData) {
        return axios.post("/user", userData);
    }
}
 