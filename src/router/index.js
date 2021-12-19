import Vue from "vue";
import VueRouter from "vue-router";
import VistaAforo from "../views/VistaAforo.vue"
import NoLocal from "../views/errores/NoLocal.vue"
import Login from "../views/Login.vue"
import Estadisticas from "../views/Estadisticas.vue"
import Home from "../views/Home.vue"
import Configuracion from "../views/Configuracion.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "VistaAforo",
    component: VistaAforo,
  },
  {
    path: "/nolocal",
    name: "NoLocal",
    component: NoLocal,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/estadisticas",
    name: "Estadisticas",
    component: Estadisticas,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/configuracion",
    name: "Configuracion",
    component: Configuracion,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
