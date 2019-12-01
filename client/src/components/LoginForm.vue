<template>
  <div>
    <form id="login" class="loginForm">
      <div class="mb-4 flex flex-wrap justify-left">
        <label for="username" class="pl-6">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          v-model="input.username"
          v-on:keyup.enter="login"
          class="mt-3 cta-input form-input w-full border-solid border-2 rounded-full py-2 px-5 outline-none font-bold text-lg"
        />
      </div>
      <div class="mb-4 flex flex-wrap justify-left">
        <label for="password" class="pl-6">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="input.password"
          v-on:keyup.enter="login"
          class="mt-3 cta-input form-input w-full v-text-field--rounded border-2 border-solid rounded-full py-2 px-5 outline-none  font-bold text-lg"
        />
      </div>
      <button
        type="button"
        v-on:click="login()"
        class="mt-3 w-full md:w-auto bg-gray-100 hover:bg-gray-200 text-blue-800 text-xl py-4 px-16 rounded-full shadow-lg"
      >
        Login
      </button>
    </form>

    <div class="mt-3 py-2 errorMsg" v-if="errorMsg">{{ errorMsg }}</div>
  </div>
</template>

<style>
.loginForm {
  max-width: 400px;
  text-align: center;
}
.errorMsg {
  color: red;
  text-align: center;
  white-space: pre;
}
</style>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import store from "./../store";
Vue.use(VueRouter);
const axios = require("axios").default;
const lsCheck = require("./../LScheck");
const login_end = "https://ourgp.herokuapp.com/api/users/login";
const jwt = require("jsonwebtoken");
// const router = new VueRouter();

export default {
  name: "LoginForm",
  data() {
    return {
      input: {
        username: "",
        password: ""
      },
      errorMsg: null
    };
  },
  mounted() {
    if (lsCheck.hasStorage && localStorage.getItem("token")) {
      var token = localStorage.getItem("token");
      try {
        const exp_check = jwt.decode(token.substring(7, token.length));
        if (Date.now() >= exp_check.exp * 1000) {
          localStorage.removeItem("token");
          throw "token expired";
        }
        //redirects to home page if token is valid
        console.log("user already signed in");
        this.$router.push("/search");
      } catch (err) {
        console.log(err);
      }
    }
  },
  methods: {
    login() {
      var self = this;
      //post username and password to server
      axios
        .post(login_end, {
          email: this.input.username,
          password: this.input.password
        })
        .then(res => {
          this.errorMsg = null;
          axios.defaults.headers.common["Authorization"] = res.data.token;
          if (lsCheck.hasStorage) {
            var decoded = jwt.decode(
              res.data.token.substring(7, res.data.token.length)
            );
            localStorage.setItem("token", res.data.token);
            this.$store.commit("setNameId", decoded.name, decoded.id);
            console.log("the name in storage is " + this.$store.state.name);
            self.$router.push("/search");
          }
        })
        .catch(err => {
          console.log(err);
          this.errorMsg = "*Error: ";
          if (err.response.data.email) {
            this.errorMsg = this.errorMsg + err.response.data.email + "\n";
          }
          if (err.response.data.password) {
            this.errorMsg += err.response.data.password;
          }
        });
    }
  }
};
</script>
