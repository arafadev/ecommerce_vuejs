import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// vuetify (this code is copied from https://github.com/vuetifyjs/vuetify)  
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
    components,
    directives,
});

// End of vuetify code 

createApp(App).use(vuetify).use(router).mount("#app");
