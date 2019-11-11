import axios from "axios";

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api' // update later
  // can add credentials and such here
});
export default {
  getMessages() {
    console.log("axios call started")
    axios.defaults.headers.common['Authorization'] = localStorage.token;
    let lst_messages = [];
    axios.get("http://localhost:5000/api/messages")
    .then((response) => {
      lst_messages = response.data.map(function(item){ 
        return item; 
      }) 
      console.log("answers")
      console.log(lst_messages)
      console.log(response.data)
      console.log("end answers")
    },
    (error) => {
      console.log("Error getting messages: " + error);
    });
    console.log("seeing this before i have answers...?")
    console.log(lst_messages)
    return lst_messages;
  },
  getMessage(messageID) {
    return apiClient.get(`/messages/${messageID}`);
  },
  postMessage(message) {
    return apiClient.post(`/messages`);
  }
};

