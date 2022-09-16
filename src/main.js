import { defineCustomElement } from "./defineCustomElement";
import App from "./App.ce.vue";
import router from "./router";

customElements.define(
  "weather-widget",
  defineCustomElement(App, {
    plugins: [router],
  })
);
