import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import Home from '../views/Home.vue';
import Services from '../views/Services.vue';
import Contact from '../views/Contact.vue';
import Order from '../views/Order.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', component: Home },
      { path: 'services', component: Services },
      { path: 'contact', component: Contact },
      { path: 'order', component: Order },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
