import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'CountryList',
    component: () => import(/* webpackChunkName: 'CountryList' */'@/views/CountryList.vue'),
  },
  {
   path: '/country/:countryId(\\d+)',
   name: 'CountryDetails',
   component: () => import(/* webpackChunkName: 'CountryDetails' */'@/views/CountryDetails.vue'),
  },
]

const router = createRouter({
   history: createWebHistory(),
  routes
})

export default router
