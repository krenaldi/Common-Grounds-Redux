import axios from 'axios';

export default {
     //==================== UserLogin and Register API ======================
    // Create new user
    newuser: function (data) {
        return axios.post("/api/user/create", data)
    },
     // log in existing user
     loginUser: function (data) {
        return axios.post("/api/user/login", data)
    }, // log out user
    logOut: function (data) {
        return axios.post("/api/user/logout", data)
    }, 

    //=================== Profile API ========================
    // Get Profile data
    getProfile: function (id) {
        return axios.get("/user");
    },
    // Update Profile data
    updateProfile: function (userData) {
        return axios.post("/user", userData);
    },
     // delete user
     deleteProfile: function (data) {
        return axios.post("/api/users", data)
    },
    //==================== Group API =========================
    // Gets all group
    getallGroups: function (data) {
        return axios.get("/api/group", data);
    },
    // Gets the group with the given id
    getGroupId: function (id) {
        return axios.get("/api/group/" + id);
    },
    // Deletes the group with the given id
    deleteGroup: function (id) {
        return axios.delete("/api/group/" + id);
    },
    // Saves a group to the database
    createGroup: function (data) {
        return axios.post("/api/group", data);
    }
}