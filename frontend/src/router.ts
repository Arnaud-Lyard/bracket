import { createRouter, createWebHistory } from "vue-router";
import TodosView from "../src/views/TodosView.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: TodosView,
    },
  ],
});
