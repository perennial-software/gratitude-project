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
      // lst_messages = response.data.map(function(item){ 
      //   return item; 
      // }) 
      lst_messages = response.data;
      console.log("answers")
      console.log(lst_messages)
      console.log("end answers")
      return lst_messages;
    },
    (error) => {
      console.log("Error getting messages: " + error);
    });
    
  },
  getMessage(messageID) {
    return apiClient.get(`/messages/${messageID}`);
  },
  postMessage(message) {
    return apiClient.post(`/messages`);
  }
};

