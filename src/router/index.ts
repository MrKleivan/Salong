
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../Views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      children: [
          
      ]
    },
  ],
})

export default router
