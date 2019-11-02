import axios from 'axios';

export default {
    // Gets all books
    CreateGroup: function (data) {
        return axios.post("/api/group", data);
    }
}
 