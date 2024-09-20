import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createWebHistory, createRouter } from "vue-router";

import Home from "./pages/Home.vue";
import Cassino from "./pages/Cassino.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/cassino", component: Cassino },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
