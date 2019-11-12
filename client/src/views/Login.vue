<template>
  <div>
    <nav-bar hideLoginItem />
    <div class="loginPage">
      <h1 class="text-4xl">Login</h1>
      <login-form />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import LoginForm from "@/components/LoginForm.vue";
export default {
  name: "login",
  components: {
    NavBar,
    LoginForm
  }
};
</script>

<style>
.loginPage {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
