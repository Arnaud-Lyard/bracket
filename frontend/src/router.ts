import { createRouter, createWebHistory } from "vue-router";
import ArticlesView from "./views/ArticlesView.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: ArticlesView,
    },
  ],
});
