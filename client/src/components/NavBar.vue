<template>
  <div
    class="flex justify-between items-baseline block py-5 px-4 md:px-8 border-b-2 border-white mb-8"
  >
    <h1 class="italic font-bold text-2xl">gratitude project</h1>
    <router-link v-if="about" :to="{ name: 'About' }" class="text-xl"
      >about</router-link
    >
  </div>
</template>
<script>
export default {
  name: "NavBar",
  props: {
    about: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>
