import {ref, computed, watch, reactive} from 'vue'
import { defineStore, } from 'pinia'

export const useCartStore = defineStore('cart', () => {

  let cartList = ref([])

  const summaryCartList = computed( () => {
    return cartList.value.filter( el => el.quantity !== 0)
  })
  const summaryLength = computed(() => {
    let length = ref(0)
    summaryCartList.value.forEach(el => {
      length.value += parseInt(el.quantity)
    })
    return length.value
  })

  const cartLength = computed(() => {
    let length = ref(0)
    cartList.value.forEach(el => {
      length.value += parseInt(el.quantity)
      if(parseInt(el.quantity) === 0) length.value += 1
    })
    return length.value
  })


  const addProduct = (product) => {
    const cartProduct = cartList.value.find(el => el.product.id === product.id)
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
    cartList.value = cartList.value.filter((el) => el.product.id !== id)
  }
 const cartValue = computed(() =>
     cartList.value.reduce((prev, item ) => prev+item.quantity * item.product.price.split("$")[1], 0).toFixed(2)
 )


  return {cartList, addProduct, removeProduct, cartValue, cartLength, summaryCartList, summaryLength}
})

