<template>
  <div>
    <form id="login" class="loginForm">
      <input
        type="text"
        name="username"
        v-model="input.username"
        v-on:keyup.enter="login"
        placeholder="Username"
        class="mt-3 cta-input form-input w-full border-2 bg-transparent rounded-full py-2 px-5 outline-none font-bold text-lg"
      />
      <input
        type="password"
        name="password"
        v-model="input.password"
        v-on:keyup.enter="login"
        placeholder="Password"
        class="mt-3 cta-input form-input w-full border-2 rounded-full py-2 px-5 outline-none font-bold text-lg"
      />
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
    }
</style>

<script>
    import Vue from 'vue';
    import VueRouter from 'vue-router';
    Vue.use(VueRouter);
    const axios = require('axios').default;
    const lsCheck = require('./../LScheck')
    const login_end = 'http://localhost:5000/api/users/login';
    const jwt = require("jsonwebtoken");
    // const router = new VueRouter();

    if (lsCheck.hasStorage && localStorage.getItem('id')) {
        //redirects to home page if user is signed in
        // router.push('/create');
    }
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
    methods: {
        login() {
            var self = this;
            if (this.input.username != "" && this.input.password != "") {
                //post username and password to server
                axios.post(login_end, {
                    email: this.input.username,
                    password: this.input.password
                })
                .then(res => {
                    console.log(res);
                    this.errorMsg = null;
                    axios.defaults.headers.common['Authorization'] = res.data.token;
                    if (lsCheck.hasStorage) {
                        console.log("enter local storage");
                        var decoded = jwt.decode(res.data.token.substring(7, res.data.token.length));
                        console.log(decoded);
                        localStorage.setItem('id', decoded.id);
                        localStorage.setItem('name', decoded.name);
                        console.log(localStorage.getItem('name'));
                        self.$router.push('/create');
                    }})
                .catch(err => {
                    console.log(err);
                    this.errorMsg = "*Error: The username and / or password is incorrect"
                });
            } else {
                this.errorMsg = "*Error: A username and password must be present";
            }
        }
    }
    };
</script>