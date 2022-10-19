import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {fetchAllProducts, fetchProduct} from '@/api/index.js'
export const useProductsStore = defineStore('products', () => {

    const products = ref([])
    const getProducts = async() => {
        products.value = await fetchAllProducts()
    }
    const product = ref(null)
    const getProduct = async(id) => {
        product.value = await fetchProduct(id)
    }
    return { products, getProducts, product, getProduct }
})

