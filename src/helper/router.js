import { createWebHistory, createRouter } from "vue-router";
import Inicio from "@/components/Inicio";
import Gallery from "@/components/Gallery";

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio,
  },
  {
    path: "/galeria",
    name: "Gallery",
    component: Gallery,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;