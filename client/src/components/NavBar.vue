<template>
  <div
    class="flex justify-between items-baseline block py-5 px-4 md:px-8 border-b-2 border-white mb-8"
  >
    <h1 class="italic font-bold text-2xl">gratitude project</h1>
    <span>
    <router-link v-if="about" :to="{ name: 'About' }" class="text-xl navItem">about</router-link>
    <span v-if="!hideLoginItem">
    <router-link v-if="id" v-on:click.native="logout" :to="{ name: 'Login' }" class="navItem">Logout</router-link>
    <router-link v-else :to="{ name: 'Login' }" class="navItem text-xl">Login</router-link>
    </span>
    </span>
  </div>
</template>
<style>
  .navItem{
    margin-left:10px;
  }
</style>
<script>


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
  data(){
    return {
      id: localStorage.getItem("id")
    }
  },
  methods:{
    logout: () =>{
      localStorage.removeItem("id");
      console.log("Deleted user from local storage");
    }
  }
};
</script>
