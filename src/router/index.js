import Vue from "vue";
import VueRouter from "vue-router";
import VistaAforo from "../views/VistaAforo.vue"
import NoLocal from "../views/errores/NoLocal.vue"

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
  }
];

const router = new VueRouter({
  routes,
});

export default router;
