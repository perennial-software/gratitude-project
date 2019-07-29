<template>
  <div>
    <nav-bar />
    <div
      class="w-full px-4 md:px-8 mx-auto justify-center mt-8"
      style="max-width: 960px;"
    >
      <create-form v-model="gratitude" />
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import CreateForm from "@/components/CreateForm.vue";

export default {
  components: {
    NavBar,
    CreateForm
  },
  data() {
    return {
      gratitude: {
        organizationName: "",
        primaryContactName: "",
        email: "",
        videoUrl: "",
        callsToAction: [...Array(3)].map(() => ({
          name: "",
          link: "",
          description: ""
        }))
      }
    };
  }
};
</script>
