import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://ourgp.herokuapp.com/api" // update later
  // can add credentials and such here
});
export default {
  getMessages() {
    console.log("axios call started");
    axios.defaults.headers.common["Authorization"] = localStorage.token;
    let lst_messages = [];
    let result = axios.get("https://ourgp.herokuapp.com/api/messages").then(
      response => {
        // lst_messages = response.data.map(function(item){
        //   return item;
        // })
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
    console.log("GET MESSAGE " + messageID)
    // console.log(`https://ourgp.herokuapp.com/api/messages/${messageID}`)
    return apiClient.get(`/messages/${messageID}`);
  },

  // Adds message to database and sends email to recipient
  postMessage(message) {
    // let message = JSON.parse(msg)
    console.log("POST " + message)

    return apiClient.post(`/messages/`, {
        beneficiaryName: message.beneficiaryName, 
        recipientName: message.recipientName, 
        recipientEmail: message.recipientEmail, 
        callsToAction: message.callsToAction,  
        videoURL: message.videoUrl
    })
  }
};
