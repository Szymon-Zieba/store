import {createRouter, createWebHistory} from 'vue-router'
import ShopMain from "@/components/ShopMain/ShopMain";
import ProductInfo from "@/components/ProductInfo"
import UserCart from "@/components/UserCart"

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
