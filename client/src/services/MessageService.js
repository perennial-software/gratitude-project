import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://ourgp.herokuapp.com/api" // TODO: ignas to change this back to heroku
  // can add credentials and such here
});
export default {
  getMessages() {
    axios.defaults.headers.common["Authorization"] = localStorage.token;
    let lst_messages = [];
    let result = axios.get("https://ourgp.herokuapp.com/api/messages").then(
      response => {
        lst_messages = response.data;
        return lst_messages;
      },
      error => {
        console.log("Error getting messages: " + error);
      }
    );
    return result;
  },
  getMessage(messageID) {
    return apiClient.get(`https://ourgp.herokuapp.com/api/messages/${messageID}`);
  },

  // Adds message to database and sends email to recipient
  postMessage(message) {
    return apiClient.post(`https://ourgp.herokuapp.com/api/messages/`, {
        beneficiaryName: message.beneficiaryName, 
        recipientName: message.recipientName, 
        recipientEmail: message.recipientEmail, 
        callsToAction: message.callsToAction,  
        videoURL: message.videoUrl
    })
  }
};
