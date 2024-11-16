import { createMemoryHistory, createRouter } from 'vue-router'

import AppHome from '../pages/AppHome.vue'
import AppMovies from '../pages/AppMovies.vue'
import Creators from '../pages/Creators.vue'

const routes = [
  { path: '/', component: AppHome, name:"home" },
  { path: '/movies', component: AppMovies, name:"movies"},
  { path: '/creators', component: Creators, name:"creators"},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export {router};