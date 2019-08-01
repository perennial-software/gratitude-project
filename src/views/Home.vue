<template>
  <div>
    <nav-bar about />
    <gratitude-detail :gratitude="gratitude" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import GratitudeDetail from "@/components/GratitudeDetail.vue";

export default {
  name: "home",
  components: {
    NavBar,
    GratitudeDetail
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
