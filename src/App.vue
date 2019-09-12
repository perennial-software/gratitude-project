<template>
  <div id="app" class="text-white antialiased">
    <router-view />
  </div>
</template>
<style>
body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
#app {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-family: "Rubik", sans-serif;
  background: linear-gradient(to bottom right, #34a7ff 55%, #45cafd);
  background-attachment: fixed;
  background-repeat: no-repeat;
}
button {
  outline: none !important;
}
*:focus {
  outline: none !important;
}
</style>
