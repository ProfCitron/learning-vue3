import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CardGenView from "../views/CardGen.vue";
import AccordionView from "../views/AccordionView.vue";
import MappingView from "../views/part-3/MappingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
    },
    {
      path: "/cardgen",
      name: "cardgen",
      component: CardGenView,
    },
    {
      path: "/quizz",
      name: "quizz",
      component: AccordionView,
    },
    {
      path: "/mapping",
      name: "mapping",
      component: MappingView,
    },
  ],
});

export default router;
