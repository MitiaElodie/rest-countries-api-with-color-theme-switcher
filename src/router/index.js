import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'CountryList',
    component: () => import(/* webpackChunkName: 'CountryList' */'@/views/CountryList.vue'),
  },
  {
   path: '/country/:countryId',
   name: 'CountryDetails',
   component: () => import(/* webpackChunkName: 'CountryDetails' */'@/views/CountryDetails.vue'),
   props: true,
  },
  {
    path: '/:patchMatch(.*)*',
    name: 'CountryList_InvalidRoute',
    redirect: { name: 'CountryList'}
  },
]

const router = createRouter({
   history: createWebHistory(),
  routes
})

export default router
