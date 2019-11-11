<template>
  <div>
    <nav-bar />
    <div
      class="flex-col px-4 md:px-8 mx-auto justify-center"
      style="max-width: 960px;"
    >
      <div class="mb-8 text-left text-gray-100">
        <h1 class="text-lg font-bold mb-8">Welcome {{user}}</h1>

        <button class="btn btn-blue">
            <router-link v-else :to="{ name: 'Search' }" class="navItem text-xl">Search</router-link>
        </button>
        <button class="btn btn-blue">
            <router-link v-else :to="{ name: 'Create' }" class="navItem text-xl">Create</router-link>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export default {
  components: {
    NavBar
  }
  data: {
      user = localStorage.username
  }
};
</script>

<style>
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
</style>