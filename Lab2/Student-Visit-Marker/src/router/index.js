import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import {ifAuthenticated} from "../assets/firebase-js/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/:pathMatch(.*)*', 
      name: '404',
      component: () => import('../views/NotFoundView.vue')
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/unauthorized',
      name: 'unauthorized',
      component: () => import('../views/UnauthorizedView.vue')
    },
    {
      path: '/saves',
      name: 'saves',
      component: () => import('../views/SavesView.vue')
    },
    {
      path: '/images',
      name: 'images',
      component: () => import('../views/ImagesView.vue'),
      beforeEnter: ifAuthenticated
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue'),
      beforeEnter: ifAuthenticated
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/HelpView.vue')
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('../views/PrivacyView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    }
  ]
});


export default router;
