import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Login from "./pages/Login.vue";
import Home from "./pages/Home.vue";
import Products from "./pages/Products.vue";
import Dashboard from "./pages/Dashboard.vue";
import BackOffice from "./pages/BackOffice.vue";
import { createVuePlugin } from "harlem";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faSignInAlt,
  faShoppingBag,
  faStoreAlt,
  faChevronUp,
  faChevronDown,
  faCircleChevronDown,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */

const routes = [
  {
    path: "/",
    component: Home,
  },

  {
    path: "/login",
    component: Login,
  },
  {
    path: "/dashboard/:id",
    component: Dashboard,
  },
  {
    path: "/backoffice/:id",
    component: BackOffice,
  },

  {
    path: "/products",
    component: Products,
  },
];

const router = createRouter({
  routes: routes,
  history: createWebHashHistory(),
});

library.add(
  faShoppingBag,
  faHome,
  faSignInAlt,
  faStoreAlt,
  faChevronUp,
  faChevronDown,
  faCircleChevronDown,
  faUpload
);
const app = createApp(App);
/* add icons to the library */

const harlem = createVuePlugin();

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(harlem);
app.mount("#app");
