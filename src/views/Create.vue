<template>
  <div>
    <nav-bar />
    <div
      class="w-full px-4 md:px-8 mx-auto justify-center mt-8"
      style="max-width: 960px;"
    >
      <gratitude-message-form v-model="gratitudeMessage" @submit="submit" />
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import GratitudeMessageForm from "@/components/GratitudeMessageForm.vue";

export default {
  components: {
    NavBar,
    GratitudeMessageForm
  },
  data() {
    return {
      gratitudeMessage: {
        beneficiaryName: "",
        recipientName: "",
        recipientEmail: "",
        videoUrl: "",
        callsToAction: [...Array(3)].map(() => ({
          buttonText: "",
          description: "",
          link: ""
        }))
      }
    };
  },
  methods: {
    submit(gratitudeMessage) {
      this.$api.postGratitudeMessage(gratitudeMessage).then(message => {
        this.$gtag("event", "create_message", {
          event_category: "gratitude_message",
          event_label: `${message.id}`
        });
        this.$router.push({ name: "Item", params: { id: message.id } });
      });
    }
  }
};
</script>
