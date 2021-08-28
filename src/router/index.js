import { createRouter, createWebHistory } from 'vue-router';
import TODO from '../views/todo.vue';

const router = createRouter({
  routes: [{ path: '/todo', component: TODO }],
  history: createWebHistory('/hhhh'),
});
export default router;
