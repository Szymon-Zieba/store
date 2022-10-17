import { createRouter, createWebHistory } from 'vue-router'
// import ShopMain from "@/views/HomeView";
// import ProductInfo from "@/components/ProductInfo";
// import UserCart from "@/components/UserCart";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'main',
    //   component: ShopMain,
    // },
    // {
    //   path: '/product',
    //   name: 'product',
    //   component: ProductInfo,
    // },
    // {
    //   path: '/cart',
    //   name: 'cart',
    //   component: UserCart,
    // }
  ]
})

export default router
