import MainPage from './MainPage.vue';
import PlantsPage from './PlantsPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: MainPage, name: 'Plants notes' },
  { path: '/plants', component: PlantsPage, name: 'How to take care' },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  document.title = to.name;
  next();
});
