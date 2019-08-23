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
import api from "@/api";

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
