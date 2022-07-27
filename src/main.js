import { createApp } from "vue";
import App from "./App.vue";

// ADD FONT AWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas, faB } from "@fortawesome/free-solid-svg-icons";
library.add(fas, faB);

// ROUTER
import router from "./router";

// ASSETS
import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
