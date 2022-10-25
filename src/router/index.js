import {createRouter, createWebHistory} from 'vue-router'
import ShopMain from "@/views/ShopMain";
import ProductInfo from "@/views/ProductInfo"
import UserCart from "@/views/UserCart"

const routes = [
    {
      path: '/',
      name: 'homeView',
      component: ShopMain
    },
    {
      path: '/cart',
      name: 'userCart',
      component: UserCart,
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductInfo,
    }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
