import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'CountryList',
    component: () => import(/* webpackChunkName: 'CountryDetails' */'@/views/CountryList.vue'),
  },
  {
   path: '/country/:countryId(\\d+)',
   name: 'CountryDetails',
   component: () => import(/* webpackChunkName: 'CountryDetails' */'@/views/CountryDetails.vue'),
 },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
