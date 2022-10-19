<template xmlns="http://www.w3.org/1999/html">
  <section id="cart" class="cart">
    <h1 class="cart-title">Your cart</h1>
    <p class="counter">
      {{ cartList.length }}  items
    </p>
    <div
        class="cart-item"
        v-for="(item, index) in cartList"
        :key="index"

    >
      <div class="cart-item-center">
        <div class="cart-img-button">
          <button @click="removeProduct(item.product.id)" class="button button-red">
            Remove
            <i class="fa fa-trash"></i>
          </button>
        </div>
        <img class="cart-img pd0-10" :src="item.product.image">
      </div>
      <div class="cart-item-center cart-item-center1">
        <div class="pd0-10 cart-item-title">
          <router-link to="/" >
            {{ item.product.product_name }}
          </router-link>
        </div>
        <div class="cart-counter pd0-10">
          <button class="button cart-counter-button" id="counter-minus" @click="minusCounter(index)">
            -
          </button>
          <p class="cart-counter-text pd0-10">{{item.quantity}}</p>
          <button class="button cart-counter-button" id="counter-plus" @click="plusCounter(index)">
            +
          </button>
        </div>
        <span class="pd0-10">
          ${{(item.product.price.split('$')[1] * item.quantity).toFixed(2)}}
        </span>
      </div>
    </div>
    <div class="cart-checkout">
      <div class="cart-checkout-price">
        <div class="">
          <span>Wartość produktów </span>
          <span>{{ cartValue }}</span>
        </div>
        <div class=""><span>Dostawa od </span><span>15zl</span></div>
      </div>
      <span>Razem z dostawą {{parseInt(cartValue) + 15}}</span>
      <button class="button button-red">Dostawa i płatność</button>
      <router-link class="button button-black" to="/">Kontynuuj zakupy</router-link>
    </div>
  </section>
</template>

<script>
import {useCartStore} from "@/stores/cart";
import {storeToRefs} from "pinia";

export default {
  name: "UserCart.vue",
  setup(){
    const cartStore = useCartStore()
    const {cartList, cartValue} = storeToRefs(cartStore)
    const {removeProduct} = cartStore
    const minusCounter = (index) => {
      if(cartList.value[index].quantity){
        cartList.value[index].quantity -= 1
      }
    }
    const plusCounter = (index) => {
      if(cartList.value[index].quantity < 10){
        cartList.value[index].quantity += 1
      }
    }

    return{
      minusCounter,
      plusCounter,
      cartList,
      removeProduct,
      cartValue
    }
  }
}
</script>

<style scoped>
.cart{
  position: relative;
  padding: 20px 0;
}
.cart-title{
  padding: 30px;
  text-align: center;
}
.cart-item{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e3e1e1;
}
.cart-item:hover .cart-img-button{
  display: block;
}
@media (max-width: 602px) {
  .cart-item{
    flex-direction: column;
  }
}
.cart-checkout{
  z-index: 2;
  position: fixed;
  height: 100px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border-top: 1px solid #f4f4f4;
}
.cart-item-center{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  width: 100%;
  position: relative;
}
@media (max-width: 602px) {
  .cart-item-center {
    display: flex;
    justify-content: center;
  }
}
.cart-checkout-price{
  display: flex;
  flex-direction: column;
}
.cart-counter{
  display: flex;
}
.cart-img{
  max-width: 150px;
}
.cart-img-button{
  display: none;
  position: absolute;
}
.cart-counter-text{
  padding: 0 10px;
}
.cart-item-title{
  max-width: 400px;
}
.pd0-10{
  padding: 0 10px;
}

</style>