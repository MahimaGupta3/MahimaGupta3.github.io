import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Skills from '../pages/Skills.vue'
import Experience from '../pages/Experience.vue'
import Contact from '../pages/Contact.vue'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/skills', name: 'skills', component: Skills },
    { path: '/experience', name: 'experience', component: Experience },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/:pathMatch(.*)*', redirect: '/' } // optional
  ],
  scrollBehavior: () => ({ top: 0 })
})