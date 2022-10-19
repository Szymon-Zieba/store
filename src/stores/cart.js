import {ref, computed, watch, reactive} from 'vue'
import { defineStore, } from 'pinia'

export const useCartStore = defineStore('cart', () => {

  let cartList = ref([])

  const addProduct = (product) => {
    const cartProduct = cartList.value.find((el) => el.product.id === product.id)
    if(cartProduct){
      cartProduct.quantity += 1
    }
    else{
      cartList.value.push({
        product,
        quantity:1
      })
    }
  }

  const removeProduct = (id) => {
    const index = cartList.value.findIndex((el) => el.product.id === id)
    if(index > -1){
      cartList.value.splice(index, 1)
    }
  }
  const tab = [
    {
      value: 1
    },
    {value: 2}
  ]
 const cartValue = computed(() =>
     cartList.value.reduce((prev, item ) => prev+item.quantity * item.product.price.split("$")[1], 0).toFixed(2)
 )

  return {cartList, addProduct, removeProduct, cartValue }
})

