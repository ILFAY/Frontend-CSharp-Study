import { createRouter, createWebHistory } from "vue-router";

import Landing from "../pages/Landing.vue";
import Register from "../pages/Register.vue";
import Theory from "../pages/Theory.vue";
import Task from "../pages/Task.vue";
import Authorisation from "../pages/Authorisation.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Landing },
    { path: "/register", component: Register },
    { path: "/theory", component: Theory },
    { path: "/task", component: Task },
    { path: "/authorisation", component: Authorisation },
  ],
});
