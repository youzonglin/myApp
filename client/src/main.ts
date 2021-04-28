import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./style.less"
import "@/assets/icons/icono.min.css"

createApp(App).use(store).use(router).mount("#app");
