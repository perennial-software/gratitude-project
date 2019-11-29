<template>
  <div>
    <nav-bar />
    <div
      class="w-full px-4 md:px-8 mx-auto justify-center mt-8"
      style="max-width: 960px;"
    >
      <gratitude-message-form v-model="gratitudeMessage" @submit="submit" />
      <div id="statusMsg" v-html="msgText" v-bind:class="{ 'msgHidden': !isLoading, 'msgFailed': msgFailed, 'msgLoading': !msgFailed }"></div>
      
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
.msgHidden{
  visibility:hidden;
}
.msgLoading{
  color:blue;
  background-color: lightblue;
  text-align:center;
  border: medium solid blue;
  border-radius: 8px;
  padding: 10px 5px;
  margin-bottom:50px;

}
.msgFailed{
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
  const axios = require("axios").default;
  import NavBar from "@/components/NavBar.vue";
  import GratitudeMessageForm from "@/components/GratitudeMessageForm.vue";
  import MessagesService from "../services/MessageService";

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
      msgFailed: false,
      isLoading: false,
      msgText: "",
    };
  },
  methods: {
    submit(gratitudeMessage) {
      this.isLoading = true;
      this.msgText = "Sending message ..."
      var self = this;
      var result = MessagesService.postMessage(gratitudeMessage)
      .then(message => {
        this.msgText = "Message Sent"
        // gtag stats 
        this.$gtag("event", "create_message", {
          event_category: "gratitude_message",
          event_label: `${message._id}`
        });
        console.log("updated cloud")
        // redirect to new page on success
        this.$router.push({ name: "Item", params: { id: message._id } });
        console.log("wow redirect")
      })
      .catch(error => {
          var error_msg = "*Error: "
          console.log("Error: ", error.response);
          if (!error.response.data.response){
            for(const [key, value] of Object.entries(error.response.data)) {
              error_msg += value + "\n";
            }
          } else {
            error_msg += error.response.data.response.body.errors[0]["message"];
          }
          self.msgText = error_msg;
          self.msgFailed = true; // Display error message 
          var statusMsgElement = document.getElementById('statusMsg');
          statusMsgElement.scrollIntoView();
      });

      // old code 
      // this.$api.postGratitudeMessage(gratitudeMessage).then(message => {
      //   this.$gtag("event", "create_message", {
      //     event_category: "gratitude_message",
      //     event_label: `${message.id}`
      //   });
      //   this.$router.push({ name: "Item", params: { id: message.id } });
      // });
    }
  }
};
</script>
