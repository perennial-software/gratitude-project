import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Create from "./views/Create.vue";
import Item from "./views/Item.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/create",
      name: "Create",
      component: Create
    },
    {
      path: "/g/:id",
      name: "Item",
      props: true,
      component: Item
    },
    {
      path: "/about",
      name: "About",
      component: About
    }
  ]
});
