import Vue from "vue";
import VueRouter from "vue-router";
import VistaAforo from "../views/VistaAforo.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "VistaAforo",
    component: VistaAforo,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
