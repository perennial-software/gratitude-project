<template>
  <div
    class="flex justify-between items-baseline block py-5 px-4 md:px-8 border-b-2 border-white mb-8"
  >
    <h1 class="italic font-bold text-2xl">gratitude project</h1>
    <span>
      <router-link v-if="about" :to="{ name: 'About' }" class="text-xl navItem"
        >about</router-link
      >
      <span v-if="!hideLoginItem">
        <span class="navItem text-xl" v-if="token" v-on:click="logout"
          >Logout</span
        >
        <router-link v-else :to="{ name: 'Login' }" class="navItem text-xl"
          >Login</router-link
        >
      </span>
    </span>
  </div>
</template>
<style>
.navItem {
  margin-left: 10px;
  cursor: pointer;
}
</style>
<script>
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
export default {
  name: "NavBar",
  props: {
    about: {
      type: Boolean,
      required: false,
      default: false
    },
    hideLoginItem: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      token: localStorage.getItem("token")
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      console.log("Deleted token from local storage");
      this.$router.push("/login");
    }
  }
};
</script>
