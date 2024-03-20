import { createApp } from "vue";
import { createPinia } from "pinia";
import VueQrcode from "vue-qrcode";

console.log(" -------->", VueQrcode);

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.component("vue-qrcode", VueQrcode);

app.use(createPinia());
app.use(router);

app.mount("#app");
