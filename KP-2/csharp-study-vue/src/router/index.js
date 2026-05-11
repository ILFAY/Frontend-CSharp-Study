import { createRouter, createWebHistory } from "vue-router";

import Landing from "../pages/Landing.vue";
import Register from "../pages/Register.vue";
import Theory from "../pages/Theory.vue";
import Task from "../pages/Task.vue";
import Authorisation from "../pages/Authorisation.vue";
import VerifyEmail from "../pages/VerifyEmail.vue";
import ForgotPassword from "../pages/ForgotPassword.vue";
import ResetPassword from "../pages/ResetPassword.vue";
import Onboarding from "../pages/Onboarding.vue";
import Profile from "../pages/Profile.vue";
import Leaderboard from "../pages/Leaderboard.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Landing },
    { path: "/register", component: Register },
    { path: "/authorisation", component: Authorisation },
    { path: "/verify-email", component: VerifyEmail },
    { path: "/forgot-password", component: ForgotPassword },
    { path: "/reset-password", component: ResetPassword },
    { path: "/theory/:topicId/:lessonId", component: Theory },
    { path: "/task/:topicId/:taskId", component: Task },
      { path: "/onboarding", component: Onboarding },
      { path: "/profile", component: Profile },
    { path: "/leaderboard", component: Leaderboard },
  ],
});
