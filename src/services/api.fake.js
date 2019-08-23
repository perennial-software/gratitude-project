export default {
  getVimeoCredentials() {
    return new Promise(resolve => {
      resolve({
        clientId: "client_id",
        clientSecret: "client_secret",
        accessToken: "access_token"
      });
    });
  },
  postGratitudeMessage(gratitudeMessage) {
    return new Promise(resolve => {
      resolve({
        id: "123456",
        ...gratitudeMessage
      });
    });
  },
  getGratitudeMessage(messageId) {
    return new Promise(resolve => {
      resolve({
        id: messageId,
        recipientName: "Margie",
        organizationName: "MCC Toronto",
        beneficiaryName: "Josie",
        videoUrl: "https://player.vimeo.com/video/343099753",
        message:
          "It makes a big difference to have you as part of our community. Want to have more impact?",
        callsToAction: [
          {
            buttonText: "Volunteer",
            description:
              "There are so many other ways to belong to our community.",
            type: "LINK",
            link: "https://google.ca"
          },
          {
            buttonText: "Advocate",
            description:
              "Advocate for issues concerning MCC Toronto, including LGBTQ and refugee rights.",
            type: "LINK",
            link: "https://google.ca"
          },
          {
            buttonText: "Donate",
            description:
              "Advocate for issues concerning MCC Toronto, including LGBTQ and refugee rights.",
            type: "LINK",
            link: "https://google.ca"
          }
        ]
      });
    });
  }
};
