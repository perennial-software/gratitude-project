<template>
  <div>
    <nav-bar about />
    <gratitude-message :gratitude="gratitude" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import GratitudeMessage from "@/components/GratitudeMessage.vue";

export default {
  name: "home",
  components: {
    NavBar,
    GratitudeMessage
  },
  data() {
    return {
      gratitude: {
        recipientName: "Margie",
        organizationName: "MCC Toronto",
        beneficiaryName: "Josie",
        videoLink: "https://player.vimeo.com/video/343099753",
        message:
          "It makes a big difference to have you as part of our community. Want to have more impact?",
        callsToAction: [
          {
            buttonText: "Volunteer",
            description:
              "There are so many other ways to belong to our community.",
            type: "LINK",
            url: "https://google.ca"
          },
          {
            buttonText: "Advocate",
            description:
              "Advocate for issues concerning MCC Toronto, including LGBTQ and refugee rights.",
            type: "LINK",
            url: "https://google.ca"
          },
          {
            buttonText: "Donate",
            description:
              "Advocate for issues concerning MCC Toronto, including LGBTQ and refugee rights.",
            type: "LINK",
            url: "https://google.ca"
          }
        ]
      }
    };
  }
};
</script>
