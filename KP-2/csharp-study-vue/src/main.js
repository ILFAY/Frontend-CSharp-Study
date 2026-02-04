import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/styles/landing_style.css";
import "./assets/styles/register_style.css";
import "./assets/styles/material_style.css";
import "./assets/styles/global_style.css";

createApp(App).use(router).mount("#app");
