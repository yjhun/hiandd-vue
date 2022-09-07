import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import "./index.css";
import "./custom.css";

const app = createApp(App).use(router);
app.config.globalProperties.axios = axios;
app.mount('#app');