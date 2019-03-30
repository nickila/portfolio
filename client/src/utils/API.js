import axios from "axios";

export default {
    pushMessage: function (messageData) {
        console.log(messageData)
        return axios.post('/api/messages', messageData)
    }
}