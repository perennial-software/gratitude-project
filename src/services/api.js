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
      .post(
        "https://us-central1-fast-synapse-246815.cloudfunctions.net/gratitudeMessage",
        gratitudeMessage
      )
      .then(response => ({ id: response.body.id }));
  },
  getGratitudeMessage(messageId) {
    return axios
      .get(
        `https://us-central1-fast-synapse-246815.cloudfunctions.net/gratitudeMessage?messageId=${messageId}`
      )
      .then(response => response.body);
  }
};
