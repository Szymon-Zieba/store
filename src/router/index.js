import {createRouter, createWebHistory} from 'vue-router'
import ShopMain from "@/views/ShopMain";
import ProductInfo from "@/views/ProductInfo"
import UserCart from "@/views/UserCart"
import PageNotFound from "@/components/PageNotFound"
import SummarySteps from "@/views/SummarySteps";
import FillData from "@/views/FillData";
import PaymentDelivery from "@/views/PaymentDelivery";

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
    },
    {
        path: '/summary',
        name: 'summarySteps',
        component: SummarySteps,
    },
    {
        path: '/:pathMatch(.*)*',
        component: PageNotFound,
    }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
