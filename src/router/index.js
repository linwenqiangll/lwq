import { createRouter, createWebHashHistory } from "vue-router";
import TODO from "../views/todo.vue";

const router = createRouter({
  routes: [{ path: "/todo", component: TODO }],
  history: createWebHashHistory(),
});
export default router;
