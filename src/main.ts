import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createWebHistory, createRouter } from "vue-router";

import Home from "./pages/Home.vue";
import Cassino from "./pages/Cassino.vue";
import Double from "./pages/Double.vue";
import Register from "./pages/Register.vue";
import Login from "./pages/Login.vue";
import Esportes from "./pages/Esportes.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/cassino", component: Cassino },
  { path: "/register", component: Register },
  { path: "/cassino/double", component: Double },
  { path: "/login", component: Login },
  { path: "/esportes", component: Esportes },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
