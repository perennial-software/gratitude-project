<template>
  <div>
    <nav-bar about />
    <gratitude-message-detail
      v-if="gratitudeMessage"
      :gratitude-message="gratitudeMessage"
    />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import GratitudeMessageDetail from "@/components/GratitudeMessageDetail.vue";

export default {
  name: "item",
  props: {
    id: {
      required: true,
      type: String
    }
  },
  components: {
    NavBar,
    GratitudeMessageDetail
  },
  mounted() {
    this.$gtag("event", "view_message", {
      event_category: "gratitude_message",
      event_label: `${this.id}`
    });

    this.loadGratitudeMessage(this.id);
  },
  watch: {
    $route: () => {
      this.loadGratitudeMessage(this.id);
    }
  },
  methods: {
    loadGratitudeMessage(messageId) {
      this.$api.getGratitudeMessage(messageId).then(gratitudeMessage => {
        this.gratitudeMessage = gratitudeMessage;
      });
    }
  },
  data() {
    return {
      gratitudeMessage: null
    };
  }
};
</script>
