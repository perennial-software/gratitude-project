// import axios from "axios";

// const apiClient = axios.create({
//   baseURL: `http://localhost:3000/api` // update later
//   // can add credentials and such here
// });
// export default {
//   getMessages() {
//     // axios.defaults.headers.common['Authorization'] = res.data.token;
//     let lst_messages = [];
//     // axios.get(baseURL + "/messages")
//     // .then((response) => {
//     //   for(let i = 0; i < response.data["messages"].length; i++){
//     //     lst_messages.push(response.data["messages"][i]);
//     //   }
//     // },
//     // (error) => {
//     //   console.log("Error getting messages: " + error);
//     // });
//     return lst_messages;
//   },
//   getMessage(messageID) {
//     return apiClient.get(`/messages/${messageID}`);
//   },
//   postMessage(message) {
//     return apiClient.post(`/messages`);
//   }
// };
import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:3000/api` // update later
  // can add credentials and such here
});
export default {
  getMessages() {
    return apiClient.get(`/messages`);
  },
  getMessage(messageID) {
    return apiClient.get(`/messages/${messageID}`);
  },
  postMessage(message) {
    return apiClient.post(`/messages`);
  }
};

