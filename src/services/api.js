import axios from "axios";

export default {
  getVimeoCredentials() {
    return new Promise((resolve, reject) => {
      resolve({
        clientId: "client_id",
        clientSecret: "client_secret",
        accessToken: "access_token"
      });
    });
  },
  postGratitudeMessage(gratitudeMessage) {
    return axios
      .post("/api/gratitudeMessage", gratitudeMessage)
      .then(response => ({ id: response.data }));
  },
  getGratitudeMessage(messageId) {
    return axios
      .get(`/api/gratitudeMessage?messageid=${messageId}`)
      .then(response => response.data);
  }
};
