import Vue from 'vue'
import VueRouter from 'vue-router'
import CoinList from '../views/coin-list.vue'
import Coin from '../views/coin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/cryptocurrencies',
  },
  {
    path: '/cryptocurrencies',
    component: CoinList
  },
  {
    path: '/cryptocurrencies/:id',
    component: Coin
    // :id will be the specific planet, a dynamic segment is denoted by: 
    // the value of the dynamic segment will be exposed through this.$route.params
  }
]

const router = new VueRouter({
  routes
})

export default router
