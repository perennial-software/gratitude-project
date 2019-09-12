<template>
  <div id="app" class="text-white antialiased">
    <router-view />
  </div>
</template>
<style>
body {
  font-family: "Rubik", sans-serif;
  /* background: #34a7ff; */
  /*
  background: 
    linear-gradient(30deg, rgba(0, 0, 0, 0) 58%, rgba(0, 0, 0, .04)  60%, rgba(0, 0, 0, 0) 60%),  
    linear-gradient(30deg, #34a7ff 60%, #45cafd 60%);
  */
  background: linear-gradient(to bottom right, #34a7ff 55%, #45cafd);
  background-attachment: fixed;
  background-repeat: no-repeat;
  min-height: 100vh;
}
button {
  outline: none !important;
}
*:focus {
  outline: none !important;
}
</style>
