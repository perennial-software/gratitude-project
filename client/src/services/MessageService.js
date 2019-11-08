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
