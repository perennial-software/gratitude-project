<template>
  <div>
    <nav-bar />
    <div
      class="flex-col px-4 md:px-8 mx-auto justify-center"
      style="max-width: 960px;"
    >
      <div class="mb-8 text-left text-gray-100">
        <h1 class="text-lg font-bold mb-8">Welcome User</h1>
        <button
          type="button"
          v-on:click="changeToCreate"
          class="mt-3 w-full md:w-auto bg-gray-100 hover:bg-gray-200 text-blue-800 text-xl py-4 px-16 rounded-full shadow-lg"
        >
          Create
        </button>
        <br />
        <button
          type="button"
          v-on:click="changeToSearch"
          class="mt-3 w-full md:w-auto bg-gray-100 hover:bg-gray-200 text-blue-800 text-xl py-4 px-16 rounded-full shadow-lg"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import VueRouter from "vue-router";

export default {
  components: {
    NavBar
  },
  methods: {
    changeToCreate() {
      console.log("pushed button!");
      this.$router.push("/create");
    },
    changeToSearch() {
      console.log("pushed button!");
      this.$router.push("/search");
    }
  }
};
</script>
