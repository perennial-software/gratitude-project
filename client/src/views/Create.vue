<template>
  <div>
    <nav-bar />
    <div
      class="w-full px-4 md:px-8 mx-auto justify-center mt-8"
      style="max-width: 960px;"
    >
      <gratitude-message-form v-model="gratitudeMessage" @submit="submit" />
      <transition name="slide-fade">
      <div class="emailFailed" v-if="emailFailed">There was an error sending the email. Please contact the administrator.</div>
      </transition>
    </div>
  </div>
</template>

<style>
.slide-fade-enter-active {
  transition: all .6s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateY(10px);
  opacity: 0;
}
.emailFailed{
  color:red;
  background-color: pink;
  text-align:center;
  border: medium solid red;
  border-radius: 8px;
  padding: 10px 5px;
  margin-bottom:50px;
}
</style>

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
      },
      emailFailed: false,
    };
  },
  methods: {
    submit(gratitudeMessage) {
      this.$api.postGratitudeMessage(gratitudeMessage).then(message => {
        this.$gtag("event", "create_message", {
          event_category: "gratitude_message",
          event_label: `${message.id}`
        });
        var wasEmailSent = false; // Check if email was sent here
        if (!wasEmailSent){
          this.emailFailed = true;
        }
        else{
          this.$router.push({ name: "Item", params: { id: message.id } });
        }
      });
    }
  }
};
</script>
